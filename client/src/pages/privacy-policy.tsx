import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We collect information you provide directly to us, such as when you create an account, 
                    fill out a contact form, request a quote, or communicate with us. This may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name and contact information (email address, phone number, mailing address)</li>
                    <li>Business information (company name, industry, project requirements)</li>
                    <li>Payment information (billing address, payment method details)</li>
                    <li>Communications between you and our team</li>
                    <li>Technical information about your project needs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices, updates, security alerts, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                    <li>Personalize and improve your experience</li>
                    <li>Facilitate contests, sweepstakes, and promotions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>In connection with a merger, acquisition, or sale of assets</li>
                    <li>With trusted service providers who assist us in operating our business</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                    <li>Secure data storage and backup procedures</li>
                  </ul>
                  <p>
                    However, no method of transmission over the Internet or electronic storage is 100% secure, 
                    so we cannot guarantee absolute security.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
                <div className="space-y-4 text-gray-600">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access: Request access to your personal information</li>
                    <li>Correction: Request correction of inaccurate information</li>
                    <li>Deletion: Request deletion of your personal information</li>
                    <li>Portability: Request a copy of your information in a portable format</li>
                    <li>Objection: Object to the processing of your information</li>
                    <li>Withdrawal: Withdraw consent where processing is based on consent</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We use cookies and similar tracking technologies to collect and track information about 
                    your use of our services. These technologies help us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and user behavior</li>
                    <li>Improve our services and user experience</li>
                    <li>Provide personalized content and advertisements</li>
                  </ul>
                  <p>
                    You can control cookies through your browser settings, but disabling cookies may 
                    affect the functionality of our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We retain your personal information for as long as necessary to provide our services, 
                    comply with legal obligations, resolve disputes, and enforce our agreements. The retention 
                    period depends on the type of information and the purpose for which it was collected.
                  </p>
                  <p>
                    When we no longer need your personal information, we will securely delete or anonymize it.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Your information may be transferred to and processed in countries other than Pakistan. 
                    We ensure that such transfers are made in accordance with applicable data protection laws 
                    and that appropriate safeguards are in place to protect your information.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "Last Updated" date. 
                    Your continued use of our services after any changes indicates your acceptance of the 
                    updated policy.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>Pixel Craft Marketing Solutions</strong></p>
                    <p>Suite 204, Plaza Center</p>
                    <p>Blue Area, Islamabad, Pakistan 44000</p>
                    <p>Email: privacy@pixelcraftpk.com</p>
                    <p>Phone: +92-51-1234567</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    <strong>Last Updated:</strong> December 2024
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
