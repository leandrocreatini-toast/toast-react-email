import * as React from 'react'
import { Image } from '../components/Image'
// local
import { Text } from '../components/Text'
import { fromTailwind } from '../utils/mailwind'

const styles = fromTailwind({
  legalCopy: 'type-small text-gray-75 mt-0 mb-2',
  legalCopyUnderlined: 'type-small text-gray-75 underline',
  creditCards: 'mt-4 mb-6'
})

export const Legal = () => {
  return (
    <div>
      <Text style={styles.legalCopy}>
        *Rate applies to Visa, Mastercard, and Discover card-present
        transactions. American Express card-present transactions are processed
        at a standard rate of 3.29% + 15¢. Custom pricing is available if you
        process more than $500k per year. Contact Sales.
      </Text>
      <Text style={styles.legalCopy}>
        **Rate applies to Visa, Mastercard, and Discover card-not-present
        transactions. American Express card-not-present transactions are
        processed at a standard rate of 3.89% + 15¢.
      </Text>
      <Text style={styles.legalCopy}>
        Pricing applies to new customers and single locations only.
      </Text>
      <Text style={styles.legalCopy}>Payment methods we accept:</Text>

      <Image style={styles.creditCards} src='' />

      <Text style={styles.legalCopyUnderlined}>Returns and refunds</Text>
      <Text style={styles.legalCopy}>
        Pricing Conditions: Toast pricing for VISA, MasterCard and Discover
        rates are valid only for merchants located in the United States and
        include Interchange Fees, Dues and Assessments.
      </Text>
      <Text style={styles.legalCopy}>
        Your participation in Toast payment processing is further subject to the
        Standard Terms and Conditions, which can be found in the Merchant
        Agreement Acknowledgement.
      </Text>
      <Text style={styles.legalCopy}>
        Additional fees may apply for cancelations and for services outside M-F,
        7am-9pm local time. See more details.
      </Text>
      <Text style={styles.legalCopy}>
        Software billing shall commence on the earlier of (i) the Contract Start
        Date set forth in this Order and (ii) the Go-Live Date. Merchant shall
        be billed for 12 months of Software fees.
      </Text>
      <Text style={styles.legalCopy}>
        Merchant hereby authorizes Toast and its designated agents and
        representatives, to initiate credits and debits, as applicable, to the
        bank account listed above or such substitute bank account as Merchant
        may designate ("Bank Account") through the automated clearing house
        ("ACH") network. Toast and its designated agents and representatives
        will initiate credits and debits to the Bank Account in accordance with
        the Agreement. This authority will remain in effect until five (5)
        business days after Toast receives written notice from Merchant of its
        change of Bank Account. Merchant will at all times maintain sufficient
        funds on deposit in the Bank Account for the debiting of amounts owed
        under the Agreement. If there are insufficient funds in the Bank Account
        to satisfy any amounts owed Toast, Merchant shall immediately send Toast
        such amounts upon demand. If the account information provided above
        changes at any time, Merchant will provide the current account
        information to Toast within five (5) business days. Neither Toast nor
        its designated agents and representatives shall be liable to Merchant
        for any delays in receipt of funds or errors in credit entries caused by
        third parties, including but not limited to, a clearinghouse, Merchant's
        financial institution, or any agent of Merchant. Merchant is solely
        liable for all fees and all overdrafts, regardless of cause. Toast shall
        have the unlimited right to debit without prior notice, any Bank Account
        containing funds for the purpose of satisfying any liability incurred on
        behalf of Merchant and any amounts owed to Toast under this Agreement. A
        fee of $50.00 may be imposed by Toast for all rejected ACH transactions.
        Merchant agrees to comply with the operating rules and guidelines of the
        National ACH Association and the laws of the United States, as in effect
        from time to time with respect to ACH transactions.
      </Text>
      <Text style={styles.legalCopy}>
        USA PATRIOT ACT NOTICE AND INFORMATION COLLECTION To help the government
        fight the funding of terrorism and money laundering activities, federal
        law requires all financial institutions to, obtain, verify and record
        information that identifies each person (individual or business) that
        opens an account. Toast collects this information on behalf of its
        financial institution partners. For this reason, Toast requests your
        name, address, date of birth and social security number. Toast also
        requests information about your company. This allows Toast to identify
        Merchant and its owners. Toast may also ask for your driver's license or
        other identifying documents and information. Each owner, control person,
        and/or officer/manager listed herein understands Toast may obtain and
        review information from consumer reporting agencies and/or other
        informational searches on such individual from time to time to validate
        the authenticity of information provided and conduct criminal background
        checks.
      </Text>
    </div>
  )
}
