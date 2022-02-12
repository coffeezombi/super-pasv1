import {expect} from 'chai'
import AuthHelper from '../helpers/auth.helper'


describe('Auth', function () {

    let authHepler = new AuthHelper()

    describe('Successful log in', function () {

        before(async function () {
            await authHepler.login(process.env.LOGIN, process.env.PASSWORD)
        })

        it('response status code is 200', function () {
            expect(authHepler.response.statusCode).to.eq(200)
        })

        it('response body contains authorization token', function () {
            expect(authHepler.response.body.token).not.to.be.undefined
        })
    })


    describe('Log in with invalid credentials', function () {

        before(async function () {
            await authHepler.login('invalid', 'invalid')
        })

        it('response status code is 404', function () {
            expect(authHepler.response.statusCode).to.eq(404)
        })


        it('response body contains error message', function () {
            expect(authHepler.response.body.message).to.be.eq('Wrong login or password.')
        })
    })
})