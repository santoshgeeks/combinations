import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  wiketKeepersNo: any = 0;
  BatsmanNo: any = 0;
  allroundersNo: any = 0;
  bowlersNo: any = 0;
  wiketKeeperName1 = '';
  wiketKeeperName2 = '';
  wiketKeeperName3 = '';
  wiketKeeperName4 = '';

  batsmanName1 = '';
  batsmanName2 = '';
  batsmanName3 = '';
  batsmanName4 = '';
  batsmanName5 = '';
  batsmanName6 = '';
  batsmanName7="";
  batsmanName8=''

  allRounders1 = '';
  allRounders2 = '';
  allRounders3 = '';
  allRounders4 = '';
  allRounders5 =''
  allRounders6=''

  bowlersName1 = '';
  bowlersName2 = '';
  bowlersName3 = '';
  bowlersName4 = '';
  bowlersName5 = '';
  bowlersName6 = '';
  bowlersName7 = ''
  bowlersName8 = ''

  constructor() {}

  ngOnInit(): void {}
  wiket=[]
  batsman=[]
  allrounders=[]
  bowlers=[]
  findAllSubsets = (arr = [], r:any,name:any) => {
    arr.sort();
    const res = [[]];
    let count, subRes, preLength;
    for (let i = 0; i < arr.length; i++) {
       count = 1;
       while (arr[i + 1] && arr[i + 1] == arr[i]) {
          count += 1;
          i++;
       }
       preLength = res.length;
       for (let j = 0; j < preLength; j++) {
          subRes = res[j].slice();
          for (let x = 1; x <= count; x++) {
             if (x > 0) subRes.push(arr[i]);
             res.push(subRes.slice());
          }
       }
    };
    console.log(res);
    let final:any=[]
    for(let i=0; i<res.length; i++){
      if(res[i].length==r){
        final.push(res[i])
      }
    }
    console.log(final);
    
    if(name=='wiket'){
      this.wiket=final
    }
    if(name=='batsman'){
      this.batsman=final
    }
    if(name=='allrounders'){
      this.allrounders=final
    }
    if(name=='bowlers'){
      this.bowlers=final
    }
   
    
 };
  wiketkeepersChange() {
    this.wiketKeeperName1 = '';
    this.wiketKeeperName2 = '';
    this.wiketKeeperName3 = '';
    this.wiketKeeperName4 = '';
  }
  batsmanChange() {
    this.batsmanName1 = '';
    this.batsmanName2 = '';
    this.batsmanName3 = '';
    this.batsmanName4 = '';
    this.batsmanName5 = '';
    this.batsmanName6 = '';
    this.batsmanName7=""
    this.batsmanName8=''
  }
  alroundersChange() {
    this.allRounders1 = '';
    this.allRounders2 = '';
    this.allRounders3 = '';
    this.allRounders4 = '';
    this.allRounders5 =''
    this.allRounders6=''
  }
  bowlersChange() {
    this.bowlersName1 = '';
    this.bowlersName2 = '';
    this.bowlersName3 = '';
    this.bowlersName4 = '';
    this.bowlersName5 = '';
    this.bowlersName6 = '';
    this.bowlersName7 = ''
    this.bowlersName8 =''
  }
  combinationOfWiket: any = 0;
  combinationOfBats: any = 0;
  combinationOfAllRounders: any = 0;
  combinationOfBowlers: any = 0;
  stopMaximum() {
    if (this.wiketKeepersNo < this.combinationOfWiket) {
      this.combinationOfWiket = 0;
    }
    if (this.BatsmanNo < this.combinationOfBats) {
      this.combinationOfBats = 0;
    }
    if (this.allroundersNo < this.combinationOfAllRounders) {
      this.combinationOfAllRounders = 0;
    }
    if (this.bowlersNo < this.combinationOfBowlers) {
      this.combinationOfBowlers = 0;
    }
  }

  fact(n: any) {
    if (n == 0) return 1;
    var res = 1;
    for (var i = 2; i <= n; i++) res = res * i;
    return res;
  }
  nCr(n: any, r: any, chosenSection: any) {
    if (chosenSection == 'wiket') {
      this.wiketkeeperTeamSize = this.fact(n) / (this.fact(r) * this.fact(n - r));
    }
    if (chosenSection == 'batsman') {
      this.batsmanTeamSize = this.fact(n) / (this.fact(r) * this.fact(n - r));
    }
    if (chosenSection == 'allrounders') {
      this.allroundersTeamSize =
        this.fact(n) / (this.fact(r) * this.fact(n - r));
    }
    if (chosenSection == 'bowlers') {
      this.bowlersTeamSize = this.fact(n) / (this.fact(r) * this.fact(n - r));
    }
  }
  wiketkeeperTeamSize: any = 0;
  batsmanTeamSize: any = 0;
  allroundersTeamSize: any = 0;
  bowlersTeamSize: any = 0;
  totalWiketKeepers:any=0
  totalBatsMans:any=0
  totalAllRounders:any=0
  totalBowlers:any=0
  calculateTeamSize(n: any, r: any, chosenSection: any) {
    this.nCr(n, r, chosenSection);
    let tempWiketKeepers:any=[]
    console.log(tempWiketKeepers);
    if(chosenSection=='wiket'){
      if(n>0){
        tempWiketKeepers.push(this.wiketKeeperName1)
      }
      if(n>1){
        tempWiketKeepers.push(this.wiketKeeperName2)
      }
      if(n>2){
        tempWiketKeepers.push(this.wiketKeeperName3)
      }
      if(n>3){
        tempWiketKeepers.push(this.wiketKeeperName4)
      }
      this.findAllSubsets(tempWiketKeepers,r,"wiket")
    }
    if(chosenSection=='batsman'){
      if(n>0){
        tempWiketKeepers.push(this.batsmanName1)
      }
      if(n>1){
        tempWiketKeepers.push(this.batsmanName2)
      }
      if(n>2){
        tempWiketKeepers.push(this.batsmanName3)
      }
      if(n>3){
        tempWiketKeepers.push(this.batsmanName4)
      }
      if(n>4){
        tempWiketKeepers.push(this.batsmanName5)
      }
      if(n>5){
        tempWiketKeepers.push(this.batsmanName6)
      }
      if(n>6){
        tempWiketKeepers.push(this.batsmanName7)
      }
      if(n>7){
        tempWiketKeepers.push(this.batsmanName8)
      }
      this.findAllSubsets(tempWiketKeepers,r,'batsman')
    }
    if(chosenSection=='allrounders'){
      if(n>0){
        tempWiketKeepers.push(this.allRounders1)
      }
      if(n>1){
        tempWiketKeepers.push(this.allRounders2)
      }
      if(n>2){
        tempWiketKeepers.push(this.allRounders3)
      }
      if(n>3){
        tempWiketKeepers.push(this.allRounders4)
      }
      if(n>4){
        tempWiketKeepers.push(this.allRounders5)
      }
      if(n>5){
        tempWiketKeepers.push(this.allRounders6)
      }
      this.findAllSubsets(tempWiketKeepers,r,"allrounders")
    }
    if(chosenSection=='bowlers'){
      if(n>0){
        tempWiketKeepers.push(this.bowlersName1)
      }
      if(n>1){
        tempWiketKeepers.push(this.bowlersName2)
      }
      if(n>2){
        tempWiketKeepers.push(this.bowlersName3)
      }
      if(n>3){
        tempWiketKeepers.push(this.bowlersName4)
      }
      if(n>4){
        tempWiketKeepers.push(this.bowlersName5)
      }
      if(n>5){
        tempWiketKeepers.push(this.bowlersName6)
      }
      if(n>6){
        tempWiketKeepers.push(this.bowlersName7)
      }
      if(n>7){
        tempWiketKeepers.push(this.bowlersName8)
      }
      this.findAllSubsets(tempWiketKeepers,r,"bowlers")
    }
    
    
  }
}
