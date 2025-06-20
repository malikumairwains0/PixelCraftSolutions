import { Card, CardContent } from "@/components/ui/card";

export default function TermsConditions() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Legal terms and conditions governing the use of our services and website. Please read carefully before engaging our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    These Terms and Conditions ("Terms") constitute a legally binding agreement between you and 
                    Pixel Craft Marketing Solutions ("Company", "we", "us", or "our") regarding your use of our 
                    website and services.
                  </p>
                  <p>
                    By accessing our website, engaging our services, or entering into any agreement with us, 
                    you acknowledge that you have read, understood, and agree to be bound by these Terms. 
                    If you do not agree to these Terms, please do not use our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Description</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Pixel Craft Marketing Solutions provides the following digital services:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Website Development and Design</li>
                    <li>Mobile Application Development</li>
                    <li>Digital Marketing Services (SEO, PPC, Social Media Marketing)</li>
                    <li>Graphic Design and Branding</li>
                    <li>Content Writing and Copywriting</li>
                    <li>Video Production and Editing</li>
                    <li>Web Hosting and Domain Registration</li>
                    <li>Cybersecurity Services</li>
                    <li>Online Reputation Management</li>
                    <li>Data Analytics and Consulting</li>
                  </ul>
                  <p>
                    Service specifications, deliverables, timelines, and pricing are detailed in individual 
                    project agreements or service contracts.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Obligations</h2>
                <div className="space-y-4 text-gray-600">
                  <p>As our client, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information required for service delivery</li>
                    <li>Make timely payments according to agreed schedules</li>
                    <li>Respond to requests for feedback and approvals within reasonable timeframes</li>
                    <li>Provide necessary access to accounts, platforms, and systems</li>
                    <li>Ensure all provided content is original or properly licensed</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Not use our services for illegal, harmful, or fraudulent activities</li>
                    <li>Respect intellectual property rights of third parties</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Standard Payment Structure:</h3>
                    <ul className="text-sm space-y-1">
                      <li>• 50% advance payment to initiate project</li>
                      <li>• 50% final payment upon project completion</li>
                      <li>• Monthly billing for ongoing services</li>
                      <li>• Custom payment plans available for large projects</li>
                    </ul>
                  </div>
                  
                  <p>Additional payment terms:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All payments are due within 15 days of invoice date</li>
                    <li>Late payments may incur 2% monthly interest charges</li>
                    <li>Services may be suspended for accounts over 30 days past due</li>
                    <li>Refunds are subject to our Return & Refund Policy</li>
                    <li>All prices are in Pakistani Rupees (PKR) unless otherwise specified</li>
                    <li>Taxes and fees are additional unless explicitly included</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Client-Owned Assets:</h3>
                      <p className="text-sm">
                        Upon full payment, clients receive ownership of custom-developed websites, applications, 
                        designs, and content created specifically for their project.
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Our Retained Rights:</h3>
                      <p className="text-sm">
                        We retain rights to our development methodologies, proprietary tools, frameworks, 
                        and general knowledge gained during projects. We may showcase completed work in 
                        our portfolio unless specifically restricted.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Third-Party Components:</h3>
                      <p className="text-sm">
                        Some projects may include third-party software, plugins, or assets subject to 
                        their respective licenses. Clients are responsible for ongoing license compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We respect the confidentiality of client information and agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Keep all client business information confidential</li>
                    <li>Not disclose proprietary information to third parties</li>
                    <li>Use client information only for service delivery purposes</li>
                    <li>Implement appropriate security measures to protect data</li>
                    <li>Return or destroy confidential information upon request</li>
                  </ul>
                  <p>
                    Confidentiality obligations survive termination of our business relationship and 
                    remain in effect for a period of 5 years.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    To the maximum extent permitted by law, Pixel Craft Marketing Solutions shall not be 
                    liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of profits, revenue, or business opportunities</li>
                    <li>Data loss or corruption not caused by our negligence</li>
                    <li>Third-party service failures or interruptions</li>
                    <li>Damages exceeding the total amount paid for services</li>
                  </ul>
                  
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg mt-4">
                    <p className="text-sm">
                      <strong>Important:</strong> Our total liability for any claim related to our services 
                      is limited to the amount paid by the client for the specific service giving rise to the claim.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Force Majeure</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We shall not be liable for any delay or failure to perform our obligations due to 
                    circumstances beyond our reasonable control, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Natural disasters, pandemics, or public health emergencies</li>
                    <li>Government actions, laws, or regulations</li>
                    <li>Internet or telecommunications failures</li>
                    <li>Third-party service provider outages</li>
                    <li>Labor disputes or strikes</li>
                    <li>Acts of war, terrorism, or civil unrest</li>
                  </ul>
                  <p>
                    In such events, we will notify clients promptly and make reasonable efforts to 
                    minimize delays and find alternative solutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Either party may terminate our services agreement under the following conditions:</p>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Termination by Client:</h3>
                      <ul className="text-sm space-y-1">
                        <li>• 30 days written notice for ongoing services</li>
                        <li>• Immediate termination for project-based work (subject to cancellation policy)</li>
                        <li>• Payment for all work completed up to termination date</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Termination by Company:</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Non-payment of invoices after 30 days</li>
                        <li>• Violation of terms and conditions</li>
                        <li>• Illegal or unethical use of services</li>
                        <li>• 30 days notice for convenience termination</li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    Upon termination, we will provide all completed work and transfer necessary assets 
                    as outlined in the service agreement.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
                <div className="space-y-4 text-gray-600">
                  <p>In the event of disputes, we follow this resolution process:</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">1</div>
                      <p className="text-sm">Direct negotiation between parties</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">2</div>
                      <p className="text-sm">Mediation through neutral third party</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">3</div>
                      <p className="text-sm">Arbitration under Pakistani law</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">4</div>
                      <p className="text-sm">Legal proceedings in Islamabad jurisdiction</p>
                    </div>
                  </div>

                  <p className="mt-4">
                    These Terms are governed by the laws of Pakistan, and any legal proceedings shall 
                    be conducted in the courts of Islamabad.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Usage Terms</h2>
                <div className="space-y-4 text-gray-600">
                  <p>When using our website, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Not use automated tools to scrape or download content</li>
                    <li>Not interfere with the website's functionality or security</li>
                    <li>Not upload malicious code or content</li>
                    <li>Respect our intellectual property rights</li>
                    <li>Provide accurate information in forms and communications</li>
                  </ul>
                  <p>
                    We reserve the right to restrict or terminate website access for violations of these terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We reserve the right to modify these Terms at any time. Changes will be effective 
                    immediately upon posting on our website. We will notify existing clients of material 
                    changes via email or through our client portal.
                  </p>
                  <p>
                    Continued use of our services after changes constitute acceptance of the modified Terms. 
                    If you do not agree to changes, you may terminate our services in accordance with 
                    the termination clause.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    If any provision of these Terms is found to be invalid, illegal, or unenforceable, 
                    the remaining provisions shall continue in full force and effect. The invalid provision 
                    shall be replaced with a valid provision that most closely reflects the original intent.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    For questions about these Terms and Conditions or to report violations:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>Pixel Craft Marketing Solutions</strong></p>
                    <p>Suite 204, Plaza Center</p>
                    <p>Blue Area, Islamabad, Pakistan 44000</p>
                    <p>Email: legal@pixelcraftpk.com</p>
                    <p>General: info@pixelcraftpk.com</p>
                    <p>Phone: +92-51-1234567</p>
                    <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM (PKT)</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    <strong>Last Updated:</strong> December 2024<br />
                    <strong>Effective Date:</strong> January 1, 2024
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
