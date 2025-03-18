import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSearchMedicationsComponent } from './top-search-medications.component';

describe('TopSearchMedicationsComponent', () => {
  let component: TopSearchMedicationsComponent;
  let fixture: ComponentFixture<TopSearchMedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSearchMedicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSearchMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
