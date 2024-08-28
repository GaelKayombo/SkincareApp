import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing'; // Adding this to help test navigation

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), RouterTestingModule] // Including routing module for button tests
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the home page', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title saying "Welcome to Skincare Routine Tracker!"', () => {
    const title = fixture.nativeElement.querySelector('ion-title').textContent;
    expect(title).toContain('Welcome to Skincare Routine Tracker!');
  });
  
  it('should have a button to navigate to the product list', () => {
    const button = fixture.nativeElement.querySelector('ion-button');
    expect(button.getAttribute('routerLink')).toBe('/product-list');
  });
});
