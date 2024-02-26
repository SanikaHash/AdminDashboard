import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { AdduserComponent } from './adduser.component';
import { AddUserComponent} from "./adduser.component";

describe('AdduserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
