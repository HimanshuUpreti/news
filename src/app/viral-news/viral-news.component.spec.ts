import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViralNewsComponent } from './viral-news.component';

describe('ViralNewsComponent', () => {
  let component: ViralNewsComponent;
  let fixture: ComponentFixture<ViralNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViralNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViralNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
