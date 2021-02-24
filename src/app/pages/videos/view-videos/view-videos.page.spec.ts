import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewVideosPage } from './view-videos.page';

describe('ViewVideosPage', () => {
  let component: ViewVideosPage;
  let fixture: ComponentFixture<ViewVideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVideosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
