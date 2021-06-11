import { Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';


enum CameraStatuses {
  disabled = 'disabled',
  enabled = 'enabled',
  taken = 'taken'
}

@Component({
  selector: 'app-cam',
  templateUrl: './cam.component.html',
  styleUrls: ['./cam.component.css']
})
export class CamComponent  {
  results: Array<any> = [];
  allowedFormats = [
    BarcodeFormat.AZTEC,
    BarcodeFormat.CODABAR,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_93,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_8,
    BarcodeFormat.EAN_13,
    BarcodeFormat.ITF,
    BarcodeFormat.MAXICODE,
    BarcodeFormat.PDF_417,
    BarcodeFormat.QR_CODE,
    BarcodeFormat.RSS_14,
    BarcodeFormat.RSS_EXPANDED,
    BarcodeFormat.UPC_A,
    BarcodeFormat.UPC_E,
    BarcodeFormat.UPC_EAN_EXTENSION
  ]
 

  scanSuccessHandler(event: any) {
    console.log(event);
    this.results.unshift(event);
  }
  result(){
    uf : this.result.toString().substring(0,2)
  }
  

 




  
}