import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade-statistics',
  templateUrl: './trade-statistics.component.html',
  styleUrls: ['./trade-statistics.component.scss']
})
export class TradeStatisticsComponent implements OnInit {

  reportItems: Array<string> = [
		'Report 1', 
		'Report 2', 
		'Report 3', 
		'Report 4', 
		'Report 5', 
		'Report 6', 
		'Report 7', 
		'Report 8', 
		'Report 9', 
		'Report 10'
  ];
  
  
  months: Array<string> = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	 quarters: Array<string> = [
		'Quarter 1',
		'Quarter 2',
		'Quarter 3',
		'Quarter 4',
		'Quarter 5',
		'Quarter 6',
		'Quarter 7',
		'Quarter 8',
		'Quarter 9',
		'Quarter 10'
	];

	 regionalBlocs : Array<string> = [
		'Regional Bloc 1',
		'Regional Bloc 2',
		'Regional Bloc 3',
		'Regional Bloc 4',
		'Regional Bloc 5',
		'Regional Bloc 6',
		'Regional Bloc 7',
		'Regional Bloc 8',
		'Regional Bloc 9',
		'Regional Bloc 10'
	];

	 regionalSubs: Array<string> = [
		'Regional Sub 1',
		'Regional Sub 2',
		'Regional Sub 3',
		'Regional Sub 4',
		'Regional Sub 5',
		'Regional Sub 6',
		'Regional Sub 7',
		'Regional Sub 8',
		'Regional Sub 9',
		'Regional Sub 10'
	];

	 productCodes : Array<string> = [
		'Product Code 1',
		'Product Code 2',
		'Product Code 3',
		'Product Code 4',
		'Product Code 5',
		'Product Code 6',
		'Product Code 7',
		'Product Code 8',
		'Product Code 9',
		'Product Code 10'
	];

	 productDescs : Array<string> = [
		'Product Desc 1',
		'Product Desc 2',
		'Product Desc 3',
		'Product Desc 4',
		'Product Desc 5',
		'Product Desc 6',
		'Product Desc 7',
		'Product Desc 8',
		'Product Desc 9',
		'Product Desc 10'
	];

	 exports: Array<string> = [
		'Export 1',
		'Export 2',
		'Export 3',
		'Export 4',
		'Export 5',
		'Export 6',
		'Export 7',
		'Export 8',
		'Export 9',
		'Export 10'
	];
	
	 imports: Array<string> = [
		'Import 1',
		'Import 2',
		'Import 3',
		'Import 4',
		'Import 5',
		'Import 6',
		'Import 7',
		'Import 8',
		'Import 9',
		'Import 10'
	];

	totalTrades: Array<string> = [
		'Total Trade 1',
		'Total Trade 2',
		'Total Trade 3',
		'Total Trade 4',
		'Total Trade 5',
		'Total Trade 6',
		'Total Trade 7',
		'Total Trade 8',
		'Total Trade 9',
		'Total Trade 10'
	];

	charts : Array<string> = [
		'Bar',
		'Bubble',
		'Doughnut',
		'Horizontal Bar',
		'Pie',
		'Polar',
		'Radar',
		'Real Bar',
	];


  constructor() { }

  isExportHidden : boolean;
  isExportShow : boolean;

  ngOnInit() {
	this.isExportHidden = true;
	this.isExportShow = true;
  }

  showImport() {
	this.isExportHidden = false;
  }

  showExport() {
	  this.isExportShow = false;
  }


}
