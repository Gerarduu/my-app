import { Component, Input, OnInit } from '@angular/core';
import { GoogleItem } from 'src/app/models/googleItem';

@Component({
	selector: 'my-card',
	templateUrl: './my-card.component.html',
	styleUrls: ['./my-card.component.scss']
})

export class MyCardComponent {

	@Input() item!: GoogleItem
	todayDate: Date = new Date()
	yearOpen: string = ""
	yearClose: string = ""

	constructor() { }

	ngOnInit(): void {  
		this.yearOpen = this.item.dateOpen.split("-").shift() as string
		this.yearClose = this.item.dateClose.split("-").shift() as string
	}

	openLink() {
		window.open(this.item.link, "_blank");
	}

}
