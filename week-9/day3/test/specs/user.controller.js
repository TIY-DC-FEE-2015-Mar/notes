(function() {
    'use strict';

    var assert = chai.assert;

    suite('user controller', function() {
        var userCtrl, $rootScope;
        var loginCalls = 0;
        var mockUserService = {};

        setup(module('app'));

        setup(module(function($provide) {
            $provide.value('UserService', mockUserService);
        }));

        setup(inject(function(_$rootScope_, $controller, $q){
            $rootScope = _$rootScope_;

            userCtrl = $controller('UserController');

            mockUserService.login = function() {
                var def = $q.defer();
                def.resolve({ token: 123456, user: { id: 13, name: 'Jordan' } });
                loginCalls++;
                return def.promise;
            };
            loginCalls = 0;
        }));

        test('login fails with no email', function() {
            assert.strictEqual(userCtrl.message, null, 'message starts as null');
            assert.strictEqual(userCtrl.login(), undefined, 'login returns undefined with no login data');
            assert.strictEqual(loginCalls, 0, 'service login method was NOT called');
            assert.ok(userCtrl.message.length > 0, 'message is set after login fail');
        });

        test('login works', function(done) {
            assert.strictEqual(userCtrl.message, null, 'message starts as null');
            assert.strictEqual(userCtrl.currentUser, null, 'currentUser starts as null');
            userCtrl.loginData = { email: 'foo', password: 'bar' };
            userCtrl.login()
                .then(function() {
                    assert.strictEqual(userCtrl.message, null, 'message is still null');
                    assert.strictEqual(loginCalls, 1, 'service login method was called');
                    assert.strictEqual(userCtrl.currentUser.token, 123456, 'currentUser token is correct');
                    assert.ok(userCtrl.currentUser.user, 'there is a user object');
                    done();
                })
                .catch(function() {
                    assert.ok(false, 'should not reject promise');
                    done();
                });
            $rootScope.$digest();
        });

    });

})();
