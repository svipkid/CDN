// ==UserScript==
// @name         RAZ_img_Download
// @namespace    https://74vip.github.io/
// @version      1.0.2
// @description  点击按钮后批量下载网页中的所有图片,并打包成zip下载
// @icon         https://www.readinga-z.com//favicon.ico
// @match        *://www.readinga-z.com/*
// @grant        GM_download
// @grant        GM_xmlhttpRequest
// @require      https://cdn.jsdelivr.net/npm/jszip@3.7.1/dist/jszip.min.js
// ==/UserScript==

(function() {
  'use strict';

    const JSZip = window.JSZip;

  function downloadImages() {
    const images = document.querySelectorAll('img');
    const zip = new JSZip();
    const promises = [];

    images.forEach(img => {
      const url = img.src;
      const filename = url.substring(url.lastIndexOf('/')+1);
      const promise = new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: "GET",
          url: url,
          responseType: "blob",
          onload: function(response) {
            zip.file(filename, response.response, {binary: true});
            resolve();
          },
          onerror: function(response) {
            console.error(`Failed to download ${url}`);
            reject();
          }
        });
      });
      promises.push(promise);
    });

    Promise.all(promises)
      .then(() => {
        zip.generateAsync({type:"blob"})
          .then(function(content) {
            const zipFilename = document.title + ".zip";
            GM_download({
              url: URL.createObjectURL(content),
              name: zipFilename,
              saveAs: true
            });
          })
          .catch(function(err) {
            console.error(err);
          });
      })
      .catch(() => {
        console.error("Error downloading images");
      });
  }

  const button = document.createElement('button');
  button.innerHTML = '<svg t="1682142668981" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3352" width="50" height="50"><path d="M514.4064 509.3888m-456.8576 0a456.8576 456.8576 0 1 0 913.7152 0 456.8576 456.8576 0 1 0-913.7152 0Z" fill="#529FF4" p-id="3353"></path><path d="M783.36 519.2704a20.48 20.48 0 0 0-20.48 20.48v144.0768a35.84 35.84 0 0 1-35.84 35.84H308.8384a35.84 35.84 0 0 1-35.84-35.84v-142.2336a20.48 20.48 0 0 0-40.96 0v142.2336a76.8 76.8 0 0 0 76.8 76.8H727.04a76.8 76.8 0 0 0 76.8-76.8v-144.0768a20.48 20.48 0 0 0-20.48-20.48z" fill="#FFFFFF" p-id="3354"></path><path d="M505.2928 615.1168a20.48 20.48 0 0 0 28.928 0.3584l164.352-159.5392a20.48 20.48 0 1 0-28.5184-29.3888l-129.024 125.2352V211.6096a20.48 20.48 0 0 0-40.96 0v339.4048L378.112 425.7792a20.48 20.48 0 1 0-29.3376 28.5696z" fill="#FFFFFF" p-id="3355"></path></svg>';
//  button.innerText = '下载图片';
  button.style.position = 'fixed';
//  button.style.backgroundColor = '#3af2be';
//  button.style.color = '#ffffff';
  button.style.top = '50%';
  button.style.left = '10px';
  button.style.zIndex = '9999';
  button.style.border ='0';
  button.onclick = downloadImages;
  document.body.appendChild(button);
})();