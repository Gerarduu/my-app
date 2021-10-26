import { Component, Input, OnInit } from '@angular/core';
import { DoB } from 'src/app/models/DoB';
import { Item } from 'src/app/models/item';
import { UserName } from 'src/app/models/username';

@Component({
	selector: 'my-card',
	templateUrl: './my-card.component.html',
	styleUrls: ['./my-card.component.scss']
})

export class MyCardComponent {

	@Input() item?: Item
	todayDate = new Date()
	
	constructor() { }

	ngOnInit(): void {  

	}

}
