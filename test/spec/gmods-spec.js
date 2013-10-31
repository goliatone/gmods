/*global define:true, describe:true , it:true , expect:true, 
beforeEach:true, sinon:true, spyOn:true , expect:true */
/* jshint strict: false */
define(['gmods', 'jquery'], function(GMods, $) {

    describe('just checking', function() {

        it('GMods should be loaded', function() {
            expect(GMods).toBeTruthy();
            var gmods = new GMods();
            expect(gmods).toBeTruthy();
        });

        it('GMods should initialize', function() {
            var gmods = new GMods();
            var output   = gmods.init();
            var expected = 'This is just a stub!';
            expect(output).toEqual(expected);
        });
        
    });

});