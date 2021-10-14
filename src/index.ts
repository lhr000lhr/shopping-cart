import Checkout from './Checkout'
import { creatIpad, creatVGA, creatMBP, creatATV } from './items'
import { appleTVRule, ipadRule, macbookRule } from './pricingRules'

const checkout = new Checkout([ipadRule, macbookRule, appleTVRule])
checkout.scan(creatMBP())
checkout.scan(creatIpad())
checkout.scan(creatATV())
checkout.scan(creatVGA())

checkout.total()
