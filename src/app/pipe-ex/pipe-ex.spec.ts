import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeEX } from './pipe-ex';

describe('PipeEX', () => {
  let component: PipeEX;
  let fixture: ComponentFixture<PipeEX>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeEX]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeEX);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
