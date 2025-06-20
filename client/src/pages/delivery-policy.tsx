import { Card, CardContent } from "@/components/ui/card";

export default function DeliveryPolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Service Delivery Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our comprehensive policy outlining delivery timelines, methods, and service completion guidelines for all digital services.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    This Service Delivery Policy outlines our commitment to timely and professional delivery of all 
                    digital services. We understand the importance of meeting deadlines and maintaining clear 
                    communication throughout the project lifecycle.
                  </p>
                  <p>
                    Our delivery approach is designed to ensure transparency, quality, and client satisfaction while 
                    maintaining realistic timelines that allow for thorough testing and refinement.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Delivery Timelines</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Standard delivery timelines for our core services:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Website Development</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Basic Website (5 pages): 2-3 weeks</li>
                        <li>• Standard Website (10 pages): 4-6 weeks</li>
                        <li>• E-commerce Website: 6-8 weeks</li>
                        <li>• Custom Web Application: 8-12 weeks</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Mobile App Development</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Simple App: 6-8 weeks</li>
                        <li>• Standard App: 8-12 weeks</li>
                        <li>• Complex App: 12-16 weeks</li>
                        <li>• Cross-platform App: 10-14 weeks</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Graphic Design</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Logo Design: 5-7 business days</li>
                        <li>• Brand Identity Package: 2-3 weeks</li>
                        <li>• Marketing Materials: 3-5 business days</li>
                        <li>• Social Media Graphics: 2-3 business days</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Content & Video</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Content Writing: 3-5 business days</li>
                        <li>• Video Production: 2-4 weeks</li>
                        <li>• Voice Over: 2-3 business days</li>
                        <li>• Transcription: 1-2 business days</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm mt-4">
                    <strong>Note:</strong> Timelines may vary based on project complexity, client feedback response time, 
                    and specific requirements. Rush delivery available for additional charges.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Process</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Our structured delivery process ensures quality and client satisfaction:</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Project Initiation</h3>
                        <p className="text-sm">Contract signing, initial payment, and project kickoff meeting</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Planning & Design</h3>
                        <p className="text-sm">Detailed planning, wireframes, mockups, and client approval</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Development/Creation</h3>
                        <p className="text-sm">Active development phase with regular progress updates</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">4</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Testing & Review</h3>
                        <p className="text-sm">Quality assurance, testing, and client review phase</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">5</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Revisions</h3>
                        <p className="text-sm">Implementation of approved changes and refinements</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">6</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Final Delivery</h3>
                        <p className="text-sm">Final approval, delivery of all assets, and project handover</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Methods</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We use various secure methods to deliver your completed projects:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Digital Deliverables</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Secure cloud storage links (Google Drive, Dropbox)</li>
                        <li>• Direct server deployment for websites</li>
                        <li>• App store submission for mobile applications</li>
                        <li>• Email delivery for smaller files</li>
                        <li>• Client portal access for ongoing projects</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Documentation</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Comprehensive user manuals</li>
                        <li>• Technical documentation</li>
                        <li>• Training materials and videos</li>
                        <li>• Maintenance guidelines</li>
                        <li>• Source code and design files</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Every project undergoes rigorous quality assurance before delivery:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cross-browser compatibility testing (for web projects)</li>
                    <li>Mobile responsiveness verification</li>
                    <li>Performance optimization and speed testing</li>
                    <li>Security vulnerability assessment</li>
                    <li>Content accuracy and proofreading</li>
                    <li>Functionality testing across all features</li>
                    <li>User experience evaluation</li>
                    <li>Search engine optimization check</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
                <div className="space-y-4 text-gray-600">
                  <p>To ensure timely delivery, we require client cooperation in the following areas:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide required content, images, and materials within agreed timeframes</li>
                    <li>Respond to review requests and feedback within 3-5 business days</li>
                    <li>Make timely payments according to the agreed schedule</li>
                    <li>Provide access to necessary accounts, servers, or platforms</li>
                    <li>Attend scheduled meetings and calls</li>
                    <li>Review and approve deliverables in a timely manner</li>
                    <li>Communicate any changes or concerns promptly</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Note:</strong> Delays in client response may result in project timeline extensions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Rush Delivery Services</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We offer expedited delivery for urgent projects with the following conditions:</p>
                  
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Rush Delivery Charges:</h3>
                    <ul className="text-sm space-y-1">
                      <li>• 25% additional cost for 50% faster delivery</li>
                      <li>• 50% additional cost for 75% faster delivery</li>
                      <li>• Custom pricing for extreme urgency</li>
                    </ul>
                  </div>

                  <p>Rush delivery conditions:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Subject to team availability and current workload</li>
                    <li>May require additional resources and team members</li>
                    <li>Full payment required upfront for rush orders</li>
                    <li>Limited revision rounds to maintain timeline</li>
                    <li>Client must be available for immediate feedback</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Delays</h2>
                <div className="space-y-4 text-gray-600">
                  <p>While we strive to meet all deadlines, delays may occur due to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Client-related delays (late content, feedback, or payments)</li>
                    <li>Scope changes or additional requirements</li>
                    <li>Technical complications or third-party service issues</li>
                    <li>Force majeure events (natural disasters, pandemics, etc.)</li>
                    <li>Public holidays and weekends</li>
                  </ul>
                  
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Our Commitment:</h3>
                    <p className="text-sm">
                      We will notify you immediately of any potential delays and work with you to minimize 
                      impact. We may offer compensation in the form of additional services or partial refunds 
                      for significant delays caused by our team.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Post-Delivery Support</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Our commitment doesn't end with delivery. We provide:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Immediate Support (30 days)</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Bug fixes and technical issues</li>
                        <li>• Minor content updates</li>
                        <li>• Performance optimization</li>
                        <li>• Training and guidance</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Extended Support</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Ongoing maintenance packages</li>
                        <li>• Regular updates and security patches</li>
                        <li>• Performance monitoring</li>
                        <li>• Priority support channels</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    For questions about delivery timelines, status updates, or any delivery-related concerns:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>Pixel Craft Marketing Solutions</strong></p>
                    <p>Suite 204, Plaza Center</p>
                    <p>Blue Area, Islamabad, Pakistan 44000</p>
                    <p>Email: delivery@pixelcraftpk.com</p>
                    <p>Support: support@pixelcraftpk.com</p>
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
