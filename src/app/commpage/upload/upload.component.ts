
import { Component, Injector, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(

  ) {
  }

  file;
  @Input() uploadUrl = '/File/UploadMedia';
  @Input() title = '选择图片';
  @Input() multiple = ''; // 选择单个/多个文件 默认单个
  @Input() accept = 'image/*'; // 文件类型 默认只上传图片
  @Input() id = 'upload1'; // 组件Id防止同一页面引用多个出现冲突
  
  token = '';
  @Output('onChange') onChange = new EventEmitter<any>();

  ngOnInit() {
  }

  /** 选择文件 */
  chooseFile() {
    let self = this;
    document.getElementById(self.id).click();
  }

  /** 上传文件 */
  uploadFn(form) {
    let self = this;
    return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
      xhr.open('post', self.uploadUrl, true); // post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
      xhr.setRequestHeader('Authorization', 'Bearer ' + self.token);
      xhr.onload = (evt: any) => {  // 开始上传
        if (evt.target.status === 200) {
          // 服务端接收完文件返回的结果
          let res = JSON.parse(evt.target.responseText).result[0];
          resolve(res);
        } else {
          reject(evt);
        }
      }; // 请求完成
      xhr.onerror = (err) => {
        reject(err)
        console.log(err);
      }; // 请求失败

      xhr.send(form); // 开始上传，发送form数据
    });
  }

  /** 选择上传文件 */
  uploadChange(e) {
    let self = this;
    /** 判断上传的文件是否为多个 */
    if (e.target.files.length == 1) {
      const file = e.target.files[0];
      /** 判断是否为图片，是否需要压缩 */
      if (file.type.indexOf('image') > -1) {
        self.compress(file).then(from => {
          self.uploadFn(from).then(res => {
            let list = [];
            list.push(res);
            self.onChange.emit(list);
            self.file = null;
          }).catch(err => {
            console.log('上传失败');
            self.file = null;
          });
        })
      } else {
        const form = new FormData();
        form.append('files', file);
        self.uploadFn(form).then(res => {
          let list = [];
          list.push(res);
          self.onChange.emit(list);
          self.file = null;
        }).catch(err => {
          console.log('上传失败');
          self.file = null;
        });
      }

    } else if (e.target.files.length > 1) {
      let list = [];
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];

        if (file.type.indexOf('image') > -1) {
          self.compress(file).then(from => {
            self.uploadFn(from).then(res => {
              list.push(res);
              if (i == e.target.files.length - 1) {
                self.onChange.emit(list);
                self.file = null;
              }
            }).catch(err => {
              console.log('上传失败');
              self.file = null;
            });
          })
        } else {
          const form = new FormData();
          form.append('files', file);
          self.uploadFn(form).then(res => {
            list.push(res);
            if (i == e.target.files.length - 1) {
              self.onChange.emit(list);
              self.file = null;
            }
          }).catch(err => {
            console.log('上传失败');
            self.file = null;
          });
        }
      }
    }
  }

  /**
    * 把图片压缩
    **/
  compress(fileObj) {
    let self = this;
    return new Promise(function (resolve, reject) {
      const form = new FormData(); // FormData 对象
      // 大于400Kb，进行压缩上传
      if (fileObj.size / 1024 > 400) {
        const reader = new FileReader();
        reader.readAsDataURL(fileObj);
        reader.onload = (e) => {
          // console.log((<FileReader>e.target).result); // 这里的e.target.result就是转换后base64格式的图片文件
          const image: any = new Image(); // 新建一个img标签（还没嵌入DOM节点)
          image.src = (<FileReader>e.target).result;
          image.onload = () => {
            const canvas = document.createElement('canvas'),
              context = canvas.getContext('2d');
            //设置压缩图片的最大高度
            var MAX_HEIGHT = 800;
            // 如果高度超标
            if (image.height > MAX_HEIGHT && image.height >= image.width) {
              // 宽度等比例缩放 *=
              image.width *= MAX_HEIGHT / image.height;
              image.height = MAX_HEIGHT;
            }
            //考录到用户上传的有可能是横屏图片同样过滤下宽度的图片。
            if (image.width > MAX_HEIGHT && image.width > image.height) {
              // 宽度等比例缩放 *=
              image.height *= MAX_HEIGHT / image.width;
              image.width = MAX_HEIGHT;
            }
            let data = '';
            //   imageWidth = image.width / 2.5,    // 压缩后图片的大小
            //   imageHeight = image.height / 2.5;
            let imageWidth = image.width;    // 压缩后图片的大小
            let imageHeight = image.height;
            canvas.width = imageWidth;
            canvas.height = imageHeight;

            context.drawImage(image, 0, 0, imageWidth, imageHeight);
            data = canvas.toDataURL('image/jpeg');
            const bl = self.convertBase64UrlToBlob(data);

            form.append('files', bl, fileObj.name); // 文件对象
            resolve(form);
          };
        };
      } else { // 小于等于1M 原图上传
        form.append('files', fileObj);
        resolve(form);
        // self.uploadFn(form);
      }

    });

  }

  /**
 * 将以base64的图片url数据转换为Blob/File
 * @param urlData
 * 用url方式表示的base64图片数据
 */
  convertBase64UrlToBlob(urlData) {
    const arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    // 转换成file对象
    const fl = new File([u8arr], 'test', { type: mime });
    // 转换成blob对象
    const bl = new Blob([u8arr], { type: mime });
    console.log('压缩过后的图片文件blob： ' + bl.size + ' ---- ' + fl.size);
    return new Blob([u8arr], { type: mime });
  }

}
