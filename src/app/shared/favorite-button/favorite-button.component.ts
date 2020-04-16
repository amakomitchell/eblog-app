import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FavoriteButtonComponent implements OnInit {
  @Input() favoritesCount: number;
  @Output() favoriteClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.favoriteClicked.emit();
  }

}
