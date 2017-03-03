import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [AppComponent]});
    });

    it ('should create an instance of AppComponent', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance).to.be.instanceOf(AppComponent);
    });

    describe('getName', () => {
        it('should return component\'s name', () => {
            let fixture = TestBed.createComponent(AppComponent);
            expect(fixture.componentInstance.getName()).to.be.eql('AppComponent');
        });
    });

});
