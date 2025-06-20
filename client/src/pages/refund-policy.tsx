import { Card, CardContent } from "@/components/ui/card";

export default function RefundPolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Return & Refund Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Clear guidelines on our return, refund, and revision policies to ensure transparency and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Refund Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    At Pixel Craft Marketing Solutions, we are committed to delivering high-quality digital services 
                    that meet your expectations. This policy outlines our approach to refunds, revisions, and client 
                    satisfaction for all our digital services.
                  </p>
                  <p>
                    Please read this policy carefully before engaging our services. By proceeding with any project, 
                    you acknowledge that you have read, understood, and agreed to these terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Eligibility</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Refunds may be considered under the following circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>We fail to deliver the agreed-upon services within the specified timeframe without valid justification</li>
                    <li>The delivered work does not meet the specifications outlined in the signed agreement</li>
                    <li>Technical issues on our end prevent us from completing the project</li>
                    <li>We are unable to provide the services as originally described</li>
                  </ul>
                  <p>
                    <strong>Note:</strong> Refunds are not available for services that have been completed and delivered 
                    according to the agreed specifications, even if you are not satisfied with the final result.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Revision Policy</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We offer revision rounds for all our services to ensure client satisfaction:</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Website Development:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Up to 3 revision rounds included</li>
                      <li>Additional revisions: PKR 5,000 per round</li>
                      <li>Major scope changes may require additional charges</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Graphic Design:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Up to 2 revision rounds for logo design</li>
                      <li>Up to 1 revision round for other graphics</li>
                      <li>Additional revisions: PKR 2,000 per round</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Content Writing:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Up to 2 revision rounds included</li>
                      <li>Additional revisions: PKR 1,000 per article</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Video Production:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Up to 2 revision rounds included</li>
                      <li>Additional revisions: PKR 8,000 per round</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
                <div className="space-y-4 text-gray-600">
                  <p>If you believe you are eligible for a refund, please follow these steps:</p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">1</div>
                      <p>Contact our support team at support@pixelcraftpk.com within 7 days of project completion</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">2</div>
                      <p>Provide detailed information about why you believe a refund is warranted</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">3</div>
                      <p>Our team will review your request within 5 business days</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">4</div>
                      <p>If approved, refunds will be processed within 10-15 business days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Refundable Services</h2>
                <div className="space-y-4 text-gray-600">
                  <p>The following services are non-refundable:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Domain registration and renewal fees</li>
                    <li>Third-party software licenses and subscriptions</li>
                    <li>Hosting services after activation</li>
                    <li>Marketing campaigns that have already been launched</li>
                    <li>Consultation services that have been delivered</li>
                    <li>Rush delivery charges</li>
                    <li>Training and documentation services</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Project cancellations are handled as follows:</p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Before Work Begins:</h3>
                      <p className="text-sm">
                        Full refund minus 10% processing fee if cancelled within 48 hours of contract signing.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Work in Progress:</h3>
                      <p className="text-sm">
                        Charges apply for work completed up to the cancellation date. Refund amount will be 
                        calculated based on remaining work.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Near Completion:</h3>
                      <p className="text-sm">
                        If project is more than 80% complete, no refund will be issued but final deliverables 
                        will be provided.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We maintain high-quality standards through our comprehensive quality assurance process:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Detailed project planning and milestone reviews</li>
                    <li>Regular client communication and feedback collection</li>
                    <li>Thorough testing before project delivery</li>
                    <li>Post-launch support to address any issues</li>
                    <li>Client satisfaction surveys and continuous improvement</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    If you have concerns about our services or billing, we encourage open communication:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contact our support team to discuss any issues</li>
                    <li>We will work with you to find a mutually acceptable solution</li>
                    <li>Escalation to management if needed</li>
                    <li>Mediation services available for complex disputes</li>
                  </ul>
                  <p>
                    Our goal is always to resolve issues amicably and maintain positive client relationships.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    For refund requests, cancellations, or any questions about this policy, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>Pixel Craft Marketing Solutions</strong></p>
                    <p>Suite 204, Plaza Center</p>
                    <p>Blue Area, Islamabad, Pakistan 44000</p>
                    <p>Email: support@pixelcraftpk.com</p>
                    <p>Phone: +92-51-1234567</p>
                    <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM (PKT)</p>
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
