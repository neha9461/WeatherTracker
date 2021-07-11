import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'data-tracker',
  templateUrl: './data-tracker.html',
})
export class DataTrackerComponent implements OnInit {
  @Input() dailyForcast: any;
  minMax:any=[];
  meanTemp=0;

  ngOnInit() {
    this.getMinMax();
    this.getMean();
  }

  getMean(){
    const meanForcast= this.dailyForcast.reduce(function(acc:any, val:any){
         acc.main.temp =  acc?.main?.temp + val?.main?.temp;
         return acc;
    });
    this.meanTemp = meanForcast?.main?.temp/this.dailyForcast.length;
    this.meanTemp = Number(this.meanTemp.toFixed(2));
  }

  getMinMax() {
     this.minMax = this.dailyForcast.reduce(function (a:any, b:any) {
            a[0] = a[0]?.main.temp_min<b?.main.temp_min? a[0]:b;
            a[1] = a[1]?.main.temp_max>b?.main.temp_max? a[1]:b;
            return a;
        }, []);
  }
}
