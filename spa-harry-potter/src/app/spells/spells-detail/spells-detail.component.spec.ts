import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsDetailComponent } from './spells-detail.component';

describe('SpellsDetailComponent', () => {
  let component: SpellsDetailComponent;
  let fixture: ComponentFixture<SpellsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpellsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
