import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentManagementMatchesComponent } from './tournament-management-matches.component';

describe('TournamentManagementMatchesComponent', () => {
  let component: TournamentManagementMatchesComponent;
  let fixture: ComponentFixture<TournamentManagementMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentManagementMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentManagementMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
