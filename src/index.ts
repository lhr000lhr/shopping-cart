import Checkout from './Checkout'
import { creatIpad, creatVGA } from './items'
import { appleTVRule, ipadRule, macbookRule } from './pricingRules'

const checkout = new Checkout([ipadRule, macbookRule, appleTVRule])
checkout.scan(creatIpad())
checkout.scan(creatIpad())
checkout.scan(creatIpad())
checkout.scan(creatIpad())
checkout.scan(creatIpad())
checkout.scan(creatVGA())

checkout.total()
