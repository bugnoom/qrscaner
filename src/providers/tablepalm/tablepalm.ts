//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

/*
  Generated class for the TablepalmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TablepalmProvider {

  loading :any;
  chk : boolean;
  maxnumber : number = 0;

  constructor( public loadingCtrl : LoadingController, public sqlite : SQLite,public tost : Toast) {
    console.log('Hello TablepalmProvider Provider');
  }

  showloading() {
    this.loading = this.loadingCtrl.create({
      content: "Loading ..."
    })
    this.loading.present();
  }

  hideloading() {
    this.loading.dismiss();
  }

  getpercent(percentvalue,typecal){
      let finds; //หลักสิบ
      let ten; // หลักหน่วย
      let s = percentvalue + "";
      if (s.length < 2) {
  
        console.log(s, "a");
        finds = percentvalue; 
        ten = "0"; 
      } else {
        finds =  s[1];
        ten = s[0];
        console.log(finds + "  " + ten);
      }
      let tablepalm = [];
      let val = 0.00;
  
      switch(typecal){
        case "traw":
          tablepalm = this.traw_table();
          val = tablepalm[finds][finds][0][ten]
        break; 
        case "tripe":
          tablepalm = this.tripe_table();
          val = tablepalm[finds][finds][0][ten]
        break;
        case 'tblank':
        tablepalm = this.tblank_table();
        val = tablepalm[finds][finds][0][ten]
        break;
        case 'tincomplete':
        tablepalm = this.tincomplete_table();
        val = tablepalm[finds][finds][0][ten]
        break;      
        case 'tlong':
        tablepalm = this.tlong_table();
        val = tablepalm[finds][finds][0][ten]
        break;
        case 'told' :
        tablepalm = this.told_table();
        val = tablepalm[finds][finds][0][ten]
        break;
        case 'tdirty':
        tablepalm = this.tdirty_table();
        val = tablepalm[finds][finds][0][ten]
        break;
        case 'tdula' :
        tablepalm = this.tdula_table();
        val = tablepalm[finds][finds][0][ten]
        break;
        case "twater":
          val = parseInt(percentvalue) / 100;
        break; 
      }
      
      
      // array ที่ tablepalm[array][ojbec][ที่หลักหน่วย][ที่หลักสิบ]
      // tablepalm[finds][finds][0][ten] 
      console.log(val);
      
      return val

  }

  traw_table(){
    let tablepalm = [
      {
        "0": [{
          "0": "0",
          "1": '1.20',
          "2": '2.40',
          "3": '3.60',
          "4": '4.80',
          "5": '6.00',
          "6": '7.20',
          "7": '8.40',
          "8": '9.60',
          "9": '10.80',
        }]
      },
      {
        "1": [{
          "0": '0.12',
          "1": '1.32',
          "2": '2.52',
          "3": '3.72',
          "4": '4.92',
          "5": '6.12',
          "6": '7.32',
          "7": '8.52',
          "8": '9.72',
          "9": '10.92',
        }]
      },
      {
        "2": [{
          "0": '0.24',
          "1": '1.44',
          "2": '2.64',
          "3": '3.84',
          "4": '5.04',
          "5": '6.24',
          "6": '7.44',
          "7": '8.64',
          "8": '9.84',
          "9": '10.04',
        }]
      },
      {
        "3": [{
          "0": '0.36',
          "1": '1.56',
          "2": '2.76',
          "3": '3.96',
          "4": '5.16',
          "5": '6.36',
          "6": '7.56',
          "7": '8.76',
          "8": '9.96',
          "9": '11.16',
        }]
      },
      {
        "4": [{
          "0": '0.48',
          "1": '1.68',
          "2": '2.88',
          "3": '4.08',
          "4": '5.28',
          "5": '6.48',
          "6": '7.68',
          "7": '8.88',
          "8": '10.08',
          "9": '11.28',
        }]
      },
      {
        "5": [{
          "0": '0.60',
          "1": '1.80',
          "2": '3.00',
          "3": '4.20',
          "4": '5.40',
          "5": '6.60',
          "6": '7.80',
          "7": '9.00',
          "8": '10.20',
          "9": '11.40',
        }]
      },
      {
        "6": [{
          "0": '0.72',
          "1": '1.92',
          "2": '3.12',
          "3": '4.32',
          "4": '5.52',
          "5": '6.72',
          "6": '7.92',
          "7": '9.12',
          "8": '10.32',
          "9": '11.52',
        }]
      },
      {
        "7": [{
          "0": '0.84',
          "1": '2.04',
          "2": '3.24',
          "3": '4.44',
          "4": '5.64',
          "5": '6.84',
          "6": '8.04',
          "7": '9.24',
          "8": '10.44',
          "9": '11.64',
        }]
      },
      {
        "8": [{
          "0": '0.96',
          "1": '2.16',
          "2": '3.36',
          "3": '4.56',
          "4": '5.76',
          "5": '6.96',
          "6": '8.16',
          "7": '9.36',
          "8": '10.56',
          "9": '11.76',
        }]
      },
      {
        "9": [{
          "0": '1.08',
          "1": '2.28',
          "2": '3.48',
          "3": '4.68',
          "4": '5.88',
          "5": '7.08',
          "6": '8.28',
          "7": '9.48',
          "8": '10.68',
          "9": '11.88',
        }]
      }
    ];
    return tablepalm;
  }

  tripe_table(){
    let tablepalm = [
      {
        "0": [{
          "0": "0.00",
          "1": '0.00',
          "2": '0.60',
          "3": '0.90',
          "4": '1.20',
          "5": '1.50',
          "6": '1.80',
          "7": '2.10',
          "8": '2.40',
          "9": '2.70',
        }]
      },
      {
        "1": [{
          "0": '0.00',
          "1": '0.33',
          "2": '0.63',
          "3": '0.93',
          "4": '1.23',
          "5": '1.53',
          "6": '1.83',
          "7": '2.13',
          "8": '2.43',
          "9": '2.73',
        }]
      },
      {
        "2": [{
          "0": '0.00',
          "1": '0.36',
          "2": '0.66',
          "3": '0.96',
          "4": '1.26',
          "5": '1.56',
          "6": '1.86',
          "7": '2.16',
          "8": '2.46',
          "9": '2.76',
        }]
      },
      {
        "3": [{
          "0": '0.00',
          "1": '0.39',
          "2": '0.69',
          "3": '0.99',
          "4": '1.29',
          "5": '1.59',
          "6": '1.89',
          "7": '2.19',
          "8": '2.49',
          "9": '2.79',
        }]
      },
      {
        "4": [{
          "0": '0.00',
          "1": '0.42',
          "2": '0.72',
          "3": '1.02',
          "4": '1.32',
          "5": '1.62',
          "6": '1.92',
          "7": '2.22',
          "8": '2.52',
          "9": '2.82',
        }]
      },
      {
        "5": [{
          "0": '0.00',
          "1": '0.45',
          "2": '0.75',
          "3": '1.05',
          "4": '1.35',
          "5": '1.65',
          "6": '1.95',
          "7": '2.25',
          "8": '2.55',
          "9": '2.85',
        }]
      },
      {
        "6": [{
          "0": '0.00',
          "1": '0.48',
          "2": '0.78',
          "3": '1.08',
          "4": '1.38',
          "5": '1.68',
          "6": '1.98',
          "7": '2.28',
          "8": '2.58',
          "9": '2.88',
        }]
      },
      {
        "7": [{
          "0": '0.00',
          "1": '0.51',
          "2": '0.81',
          "3": '1.11',
          "4": '1.41',
          "5": '1.71',
          "6": '2.01',
          "7": '2.31',
          "8": '2.61',
          "9": '2.91',
        }]
      },
      {
        "8": [{
          "0": '0.00',
          "1": '0.54',
          "2": '0.84',
          "3": '1.14',
          "4": '1.44',
          "5": '1.74',
          "6": '2.04',
          "7": '2.34',
          "8": '2.64',
          "9": '2.94',
        }]
      },
      {
        "9": [{
          "0": '0.00',
          "1": '0.57',
          "2": '0.87',
          "3": '1.17',
          "4": '1.47',
          "5": '1.77',
          "6": '2.07',
          "7": '2.37',
          "8": '2.67',
          "9": '2.97',
        }]
      }
    ];

    return tablepalm;
  }

  tblank_table(){
    let tablepalm = [
      {
        "0": [{
          "0": "0.00",
          "1": '1.00',
          "2": '2.00',
          "3": '0.00',
          "4": '0.00',
          "5": '0.00',
          "6": '0.00',
          "7": '0.00',
          "8": '0.00',
          "9": '0.00',
        }]
      },
      {
        "1": [{
          "0": "0.10",
          "1": '1.10',
          "2": '0.00',
          "3": '0.00',
          "4": '0.00',
          "5": '0.00',
          "6": '0.00',
          "7": '0.00',
          "8": '0.00',
          "9": '0.00',
        }]
      },
      {
        "2": [{
          "0": "0.20",
          "1": '1.20',
          "2": '0.00',
          "3": '0.00',
          "4": '0.00',
          "5": '0.00',
          "6": '0.00',
          "7": '0.00',
          "8": '0.00',
          "9": '0.00',
        }]
      },
      {
        "3": [{
          "0": "0.30",
          "1": '1.30',
          "2": '0.00',
          "3": '0.00',
          "4": '0.00',
          "5": '0.00',
          "6": '0.00',
          "7": '0.00',
          "8": '0.00',
          "9": '0.00',
        }]
      },
      {
        "4": [{
          "0": "0.40",
          "1": '1.40',
          "2": '0.00',
          "3": '0.00',
          "4": '0.00',
          "5": '0.00',
          "6": '0.00',
          "7": '0.00',
          "8": '0.00',
          "9": '0.00',
        }]
      },
      {
        "5": [{
          "0": "0.50",
          "1": '1.50',
          "2": '0.00',
          "3": '0.00',
          "4": '0.00',
          "5": '0.00',
          "6": '0.00',
          "7": '0.00',
          "8": '0.00',
          "9": '0.00',
        }]
      },
      {
        "6": [{
          "0": "0.60",
          "1": '1.60',
          "2": '0.00',
          "3": '0.00',
          "4": '0.00',
          "5": '0.00',
          "6": '0.00',
          "7": '0.00',
          "8": '0.00',
          "9": '0.00',
        }]
      },
      {
        "7": [{
          "0": "0.70",
          "1": '1.70',
          "2": '0.00',
          "3": '0.00',
          "4": '0.00',
          "5": '0.00',
          "6": '0.00',
          "7": '0.00',
          "8": '0.00',
          "9": '0.00',
        }]
      },
      {
        "8": [{
          "0": "0.80",
          "1": '1.80',
          "2": '0.00',
          "3": '0.00',
          "4": '0.00',
          "5": '0.00',
          "6": '0.00',
          "7": '0.00',
          "8": '0.00',
          "9": '0.00',
        }]
      },
      {
        "9": [{
          "0": "0.90",
          "1": '1.90',
          "2": '0.00',
          "3": '0.00',
          "4": '0.00',
          "5": '0.00',
          "6": '0.00',
          "7": '0.00',
          "8": '0.00',
          "9": '0.00',
        }]
      }
    ];

    return tablepalm;
  }

  tincomplete_table(){
    let tablepalm = [
      {
        "0": [{
          "0": "0.00",
          "1": '1.20',
          "2": '2.40',
          "3": '3.60',
          "4": '4.80',
          "5": '6.00',
          "6": '7.20',
          "7": '8.40',
          "8": '9.60',
          "9": '10.80',
        }]
      },
      {
        "1": [{
          "0": "0.12",
          "1": '1.32',
          "2": '2.52',
          "3": '3.72',
          "4": '4.92',
          "5": '6.12',
          "6": '7.32',
          "7": '8.52',
          "8": '9.72',
          "9": '10.92',
        }]
      },
      {
        "2": [{
          "0": "0.24",
          "1": '1.44',
          "2": '2.64',
          "3": '3.84',
          "4": '5.04',
          "5": '6.24',
          "6": '7.44',
          "7": '8.64',
          "8": '9.84',
          "9": '11.04',
        }]
      },
      {
        "3": [{
          "0": "0.36",
          "1": '1.56',
          "2": '2.76',
          "3": '3.96',
          "4": '5.16',
          "5": '6.36',
          "6": '7.56',
          "7": '8.76',
          "8": '9.96',
          "9": '11.16',
        }]
      },
      {
        "4": [{
          "0": "0.48",
          "1": '1.68',
          "2": '2.88',
          "3": '4.08',
          "4": '5.28',
          "5": '6.48',
          "6": '7.68',
          "7": '8.88',
          "8": '10.08',
          "9": '11.26',
        }]
      },
      {
        "5": [{
          "0": "0.60",
          "1": '1.80',
          "2": '3.00',
          "3": '4.20',
          "4": '5.40',
          "5": '6.60',
          "6": '7.80',
          "7": '9.00',
          "8": '10.20',
          "9": '11.40',
        }]
      },
      {
        "6": [{
          "0": "0.72",
          "1": '1.92',
          "2": '3.12',
          "3": '4.32',
          "4": '5.52',
          "5": '6.72',
          "6": '7.92',
          "7": '9.12',
          "8": '10.32',
          "9": '11.52',
        }]
      },
      {
        "7": [{
          "0": "0.84",
          "1": '2.04',
          "2": '3.24',
          "3": '4.44',
          "4": '5.64',
          "5": '6.84',
          "6": '8.04',
          "7": '9.24',
          "8": '10.44',
          "9": '11.64',
        }]
      },
      {
        "8": [{
          "0": "0.96",
          "1": '2.16',
          "2": '3.36',
          "3": '4.56',
          "4": '5.76',
          "5": '6.96',
          "6": '8.16',
          "7": '9.36',
          "8": '10.56',
          "9": '11.76',
        }]
      },
      {
        "9": [{
          "0": "1.08",
          "1": '2.28',
          "2": '3.48',
          "3": '4.68',
          "4": '5.88',
          "5": '7.08',
          "6": '8.28',
          "7": '9.48',
          "8": '10.68',
          "9": '11.88',
        }]
      }
    ];

    return tablepalm;
  }

tlong_table(){
  let tablepalm = [
    {
      "0": [{
        "0": "0.00",
        "1": '1.20',
        "2": '2.40',
        "3": '3.60',
        "4": '4.80',
        "5": '6.00',
        "6": '7.20',
        "7": '8.40',
        "8": '9.60',
        "9": '10.80',
      }]
    },
    {
      "1": [{
        "0": "0.12",
        "1": '1.32',
        "2": '2.52',
        "3": '3.72',
        "4": '4.92',
        "5": '6.12',
        "6": '7.32',
        "7": '8.52',
        "8": '9.72',
        "9": '10.92',
      }]
    },
    {
      "2": [{
        "0": "0.24",
        "1": '1.44',
        "2": '2.64',
        "3": '3.84',
        "4": '5.04',
        "5": '6.24',
        "6": '7.44',
        "7": '8.64',
        "8": '9.84',
        "9": '11.04',
      }]
    },
    {
      "3": [{
        "0": "0.36",
        "1": '1.56',
        "2": '2.76',
        "3": '3.96',
        "4": '5.16',
        "5": '6.36',
        "6": '7.56',
        "7": '8.76',
        "8": '9.96',
        "9": '11.16',
      }]
    },
    {
      "4": [{
        "0": "0.48",
        "1": '1.68',
        "2": '2.88',
        "3": '4.08',
        "4": '5.28',
        "5": '6.48',
        "6": '7.68',
        "7": '8.88',
        "8": '10.08',
        "9": '11.26',
      }]
    },
    {
      "5": [{
        "0": "0.60",
        "1": '1.80',
        "2": '3.00',
        "3": '4.20',
        "4": '5.40',
        "5": '6.60',
        "6": '7.80',
        "7": '9.00',
        "8": '10.20',
        "9": '11.40',
      }]
    },
    {
      "6": [{
        "0": "0.72",
        "1": '1.92',
        "2": '3.12',
        "3": '4.32',
        "4": '5.52',
        "5": '6.72',
        "6": '7.92',
        "7": '9.12',
        "8": '10.32',
        "9": '11.52',
      }]
    },
    {
      "7": [{
        "0": "0.84",
        "1": '2.04',
        "2": '3.24',
        "3": '4.44',
        "4": '5.64',
        "5": '6.84',
        "6": '8.04',
        "7": '9.24',
        "8": '10.44',
        "9": '11.64',
      }]
    },
    {
      "8": [{
        "0": "0.96",
        "1": '2.16',
        "2": '3.36',
        "3": '4.56',
        "4": '5.76',
        "5": '6.96',
        "6": '8.16',
        "7": '9.36',
        "8": '10.56',
        "9": '11.76',
      }]
    },
    {
      "9": [{
        "0": "1.08",
        "1": '2.28',
        "2": '3.48',
        "3": '4.68',
        "4": '5.88',
        "5": '7.08',
        "6": '8.28',
        "7": '9.48',
        "8": '10.68',
        "9": '11.88',
      }]
    }
  ];
  return tablepalm;
}
told_table(){
  let tablepalm = [
    {
      "0": [{
        "0": "0.00",
        "1": '1.20',
        "2": '2.40',
        "3": '3.60',
        "4": '4.80',
        "5": '6.00',
        "6": '7.20',
        "7": '8.40',
        "8": '9.60',
        "9": '10.80',
      }]
    },
    {
      "1": [{
        "0": "0.12",
        "1": '1.32',
        "2": '2.52',
        "3": '3.72',
        "4": '4.92',
        "5": '6.12',
        "6": '7.32',
        "7": '8.52',
        "8": '9.72',
        "9": '10.92',
      }]
    },
    {
      "2": [{
        "0": "0.24",
        "1": '1.44',
        "2": '2.64',
        "3": '3.84',
        "4": '5.04',
        "5": '6.24',
        "6": '7.44',
        "7": '8.64',
        "8": '9.84',
        "9": '11.04',
      }]
    },
    {
      "3": [{
        "0": "0.36",
        "1": '1.56',
        "2": '2.76',
        "3": '3.96',
        "4": '5.16',
        "5": '6.36',
        "6": '7.56',
        "7": '8.76',
        "8": '9.96',
        "9": '11.16',
      }]
    },
    {
      "4": [{
        "0": "0.48",
        "1": '1.68',
        "2": '2.88',
        "3": '4.08',
        "4": '5.28',
        "5": '6.48',
        "6": '7.68',
        "7": '8.88',
        "8": '10.08',
        "9": '11.26',
      }]
    },
    {
      "5": [{
        "0": "0.60",
        "1": '1.80',
        "2": '3.00',
        "3": '4.20',
        "4": '5.40',
        "5": '6.60',
        "6": '7.80',
        "7": '9.00',
        "8": '10.20',
        "9": '11.40',
      }]
    },
    {
      "6": [{
        "0": "0.72",
        "1": '1.92',
        "2": '3.12',
        "3": '4.32',
        "4": '5.52',
        "5": '6.72',
        "6": '7.92',
        "7": '9.12',
        "8": '10.32',
        "9": '11.52',
      }]
    },
    {
      "7": [{
        "0": "0.84",
        "1": '2.04',
        "2": '3.24',
        "3": '4.44',
        "4": '5.64',
        "5": '6.84',
        "6": '8.04',
        "7": '9.24',
        "8": '10.44',
        "9": '11.64',
      }]
    },
    {
      "8": [{
        "0": "0.96",
        "1": '2.16',
        "2": '3.36',
        "3": '4.56',
        "4": '5.76',
        "5": '6.96',
        "6": '8.16',
        "7": '9.36',
        "8": '10.56',
        "9": '11.76',
      }]
    },
    {
      "9": [{
        "0": "1.08",
        "1": '2.28',
        "2": '3.48',
        "3": '4.68',
        "4": '5.88',
        "5": '7.08',
        "6": '8.28',
        "7": '9.48',
        "8": '10.68',
        "9": '11.88',
      }]
    }
  ];
  return tablepalm;

}
tdirty_table(){
  let tablepalm = [
    {
      "0": [{
        "0": "0.00",
        "1": '1.20',
        "2": '2.40',
        "3": '3.60',
        "4": '4.80',
        "5": '6.00',
        "6": '7.20',
        "7": '8.40',
        "8": '9.60',
        "9": '10.80',
      }]
    },
    {
      "1": [{
        "0": "0.12",
        "1": '1.32',
        "2": '2.52',
        "3": '3.72',
        "4": '4.92',
        "5": '6.12',
        "6": '7.32',
        "7": '8.52',
        "8": '9.72',
        "9": '10.92',
      }]
    },
    {
      "2": [{
        "0": "0.24",
        "1": '1.44',
        "2": '2.64',
        "3": '3.84',
        "4": '5.04',
        "5": '6.24',
        "6": '7.44',
        "7": '8.64',
        "8": '9.84',
        "9": '11.04',
      }]
    },
    {
      "3": [{
        "0": "0.36",
        "1": '1.56',
        "2": '2.76',
        "3": '3.96',
        "4": '5.16',
        "5": '6.36',
        "6": '7.56',
        "7": '8.76',
        "8": '9.96',
        "9": '11.16',
      }]
    },
    {
      "4": [{
        "0": "0.48",
        "1": '1.68',
        "2": '2.88',
        "3": '4.08',
        "4": '5.28',
        "5": '6.48',
        "6": '7.68',
        "7": '8.88',
        "8": '10.08',
        "9": '11.26',
      }]
    },
    {
      "5": [{
        "0": "0.60",
        "1": '1.80',
        "2": '3.00',
        "3": '4.20',
        "4": '5.40',
        "5": '6.60',
        "6": '7.80',
        "7": '9.00',
        "8": '10.20',
        "9": '11.40',
      }]
    },
    {
      "6": [{
        "0": "0.72",
        "1": '1.92',
        "2": '3.12',
        "3": '4.32',
        "4": '5.52',
        "5": '6.72',
        "6": '7.92',
        "7": '9.12',
        "8": '10.32',
        "9": '11.52',
      }]
    },
    {
      "7": [{
        "0": "0.84",
        "1": '2.04',
        "2": '3.24',
        "3": '4.44',
        "4": '5.64',
        "5": '6.84',
        "6": '8.04',
        "7": '9.24',
        "8": '10.44',
        "9": '11.64',
      }]
    },
    {
      "8": [{
        "0": "0.96",
        "1": '2.16',
        "2": '3.36',
        "3": '4.56',
        "4": '5.76',
        "5": '6.96',
        "6": '8.16',
        "7": '9.36',
        "8": '10.56',
        "9": '11.76',
      }]
    },
    {
      "9": [{
        "0": "1.08",
        "1": '2.28',
        "2": '3.48',
        "3": '4.68',
        "4": '5.88',
        "5": '7.08',
        "6": '8.28',
        "7": '9.48',
        "8": '10.68',
        "9": '11.88',
      }]
    }
  ];
  return tablepalm;

}
tdula_table(){
  let tablepalm = [
    {
      "0": [{
        "0": "0.00",
        "1": '1.20',
        "2": '2.40',
        "3": '3.60',
        "4": '4.80',
        "5": '6.00',
        "6": '7.20',
        "7": '8.40',
        "8": '9.60',
        "9": '10.80',
      }]
    },
    {
      "1": [{
        "0": "0.12",
        "1": '1.32',
        "2": '2.52',
        "3": '3.72',
        "4": '4.92',
        "5": '6.12',
        "6": '7.32',
        "7": '8.52',
        "8": '9.72',
        "9": '10.92',
      }]
    },
    {
      "2": [{
        "0": "0.24",
        "1": '1.44',
        "2": '2.64',
        "3": '3.84',
        "4": '5.04',
        "5": '6.24',
        "6": '7.44',
        "7": '8.64',
        "8": '9.84',
        "9": '11.04',
      }]
    },
    {
      "3": [{
        "0": "0.36",
        "1": '1.56',
        "2": '2.76',
        "3": '3.96',
        "4": '5.16',
        "5": '6.36',
        "6": '7.56',
        "7": '8.76',
        "8": '9.96',
        "9": '11.16',
      }]
    },
    {
      "4": [{
        "0": "0.48",
        "1": '1.68',
        "2": '2.88',
        "3": '4.08',
        "4": '5.28',
        "5": '6.48',
        "6": '7.68',
        "7": '8.88',
        "8": '10.08',
        "9": '11.26',
      }]
    },
    {
      "5": [{
        "0": "0.60",
        "1": '1.80',
        "2": '3.00',
        "3": '4.20',
        "4": '5.40',
        "5": '6.60',
        "6": '7.80',
        "7": '9.00',
        "8": '10.20',
        "9": '11.40',
      }]
    },
    {
      "6": [{
        "0": "0.72",
        "1": '1.92',
        "2": '3.12',
        "3": '4.32',
        "4": '5.52',
        "5": '6.72',
        "6": '7.92',
        "7": '9.12',
        "8": '10.32',
        "9": '11.52',
      }]
    },
    {
      "7": [{
        "0": "0.84",
        "1": '2.04',
        "2": '3.24',
        "3": '4.44',
        "4": '5.64',
        "5": '6.84',
        "6": '8.04',
        "7": '9.24',
        "8": '10.44',
        "9": '11.64',
      }]
    },
    {
      "8": [{
        "0": "0.96",
        "1": '2.16',
        "2": '3.36',
        "3": '4.56',
        "4": '5.76',
        "5": '6.96',
        "6": '8.16',
        "7": '9.36',
        "8": '10.56',
        "9": '11.76',
      }]
    },
    {
      "9": [{
        "0": "1.08",
        "1": '2.28',
        "2": '3.48',
        "3": '4.68',
        "4": '5.88',
        "5": '7.08',
        "6": '8.28',
        "7": '9.48',
        "8": '10.68',
        "9": '11.88',
      }]
    }
  ];
  return tablepalm;

}


  connectdb(){
    let db = this.sqlite.create({
      name: "pcpalm.db",
      location: "default"
    });
    return db;
  }


  success(result,txt){
    this.tost.show(txt, '5000', 'center').subscribe(
      restost => {
        this.chk = true;
      }
    )
  }

  error(err){
    this.tost.show("Error to save " + err, '5000', 'center').subscribe(
      restost => {
        console.log(restost);
        this.chk= false;
      }
    )
  }

  savedatelist(serial,totalsum){
    this.connectdb() 
    .then((db: SQLiteObject) => {
      db.transaction(function(tx){
        tx.executeSql("INSERT INTO pcpalm_list (id,totalsum) VALUES (?,?)",[serial,totalsum]);
      }).then(res =>{
          this.success(res,"Data saved");
          return true
      }).catch(err =>{
          this.error(err);
          return false
      })
    })
      .catch(e => {
        console.log(e);
        this.tost.show(e, '5000', 'center').subscribe(
          restost => {
            console.log(restost);
          }
        )
      })
  }

  savedatadetail(serial,param,name,value,percent) {
    this.connectdb().then((db: SQLiteObject) => {
      db.transaction(function(tx){
        tx.executeSql('INSERT INTO pcpalm_detail (id,param,name,val,percent) VALUES (?,?,?,?,?)',[serial,param,name,value,percent]);
      }).then(res =>{
          this.success(res,"Data saved");
      }).catch(err =>{
          this.error(err);
      })
    })
      .catch(e => {
        console.log(e);
        this.tost.show(e, '5000', 'center').subscribe(
          restost => {
            console.log(restost);
          }
        )
      })
  }

  deletedata(id){
    console.log('Delete data');
    this.connectdb().then((db:SQLiteObject)=>{
      db.transaction(function(tx){
        tx.executeSql("Delete  From pcpalm_detail Where id = ?",[id]);
        tx.executeSql("Delete From pcpalm_list Where id = ?",[id]);
      }).then(res =>{
       this.success(res,"Delete success");
       return true;
      }).catch(err =>{
        this.error(err);
        return false;
        
      })
    })
  }

  generateAutoNumber(){
    //get last record from database
   this.connectdb().then((db:SQLiteObject)=>{
        db.executeSql('Select * FROM pcpalm_list ORDER BY list_id DESC',{})
          .then(res=>{ console.log(res);this.maxnumber = parseInt(res.rows.item(0).id) + 1 })
          .catch(err=>{console.log("select gen :",err); this.maxnumber=parseInt('1');})
    })
      .catch(err=>{console.log("gen Number :",err)})

  }

}
