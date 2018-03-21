import React, { Component } from 'react';
import Tab, { Icon, Divider, Table, Button } from 'semantic-ui-react';

// styles
import './SummaryTab.css';

const image = 'http://res.cloudinary.com/dlqcyupez/image/upload/v1520363908/img.jpg';

export default class SummaryTab extends Component {
  render() {
    return (
      <div className="profile-tabs-container">
        <div className="summary-left">
          <div className="background-fill">
            <Icon name="graduation" /> Provider Training <Divider />
            <div>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>University</Table.HeaderCell>
                    <Table.HeaderCell>Degree</Table.HeaderCell>
                    <Table.HeaderCell>Focus</Table.HeaderCell>
                    <Table.HeaderCell>Graduated</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Columbia</Table.Cell>
                    <Table.Cell>Doctorate</Table.Cell>
                    <Table.Cell>M.D.</Table.Cell>
                    <Table.Cell>1973</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Certification</Table.HeaderCell>
                    <Table.HeaderCell>Cert.Body</Table.HeaderCell>
                    <Table.HeaderCell>Year</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Internal Medicine</Table.Cell>
                    <Table.Cell>Internal Medicine</Table.Cell>
                    <Table.Cell>Not Specified</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
          <div className="background-fill-next">
            <Icon name="graduation" /> Experience & Accolades <Divider />
            <div>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Role</Table.HeaderCell>
                    <Table.HeaderCell>Organization</Table.HeaderCell>
                    <Table.HeaderCell>Time</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Professional Member</Table.Cell>
                    <Table.Cell>
                      <h5>New York County Medical Society</h5>
                    </Table.Cell>
                    <Table.Cell>Present</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Professional Member</Table.Cell>
                    <Table.Cell>
                      <h5>American College of Physicians</h5>
                    </Table.Cell>
                    <Table.Cell>Present</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Professional Member</Table.Cell>
                    <Table.Cell>
                      <h5>Medical Society of the State of NY</h5>
                    </Table.Cell>
                    <Table.Cell>Present</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Distinction</Table.HeaderCell>
                    <Table.HeaderCell>Institution</Table.HeaderCell>
                    <Table.HeaderCell>Year</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>FACP - Fellow</Table.Cell>
                    <Table.Cell>American College of Physicians</Table.Cell>
                    <Table.Cell> </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
          <div className="background-fill-next">
            <Icon name="hospital" /> Practice & Hospital Affiliations
            <Divider />
            <div className="practise-info">
              <li>Lenox Hill Hospital</li>
              <span>New York, New York - 10003</span>
              <li>Mount Sinai Hospital</li>
              <span>New York, New York - 10029</span>
              <li>New York University Medical Center</li>
              <span>New York, New York - 10003</span>
            </div>
          </div>
          <div className="background-fill-next">
            <Icon name="camera retro" /> Photos
            <Divider />
            <div>
              <img src={image} alt="doctor-image" />
            </div>
          </div>
          <div className="background-fill-next">
            <Icon name="file text outline" /> Patient Forms to Download
            <Divider />
            <div>
              <li>
                <a>Patient Registration Form</a>
              </li>
            </div>
          </div>
        </div>

        <div className="summary-right">
          <div className="background-fill">
            <Icon name="list layout" /> Specialties <Divider />
            <h4>Languages Spoken</h4>
            <span>English, Hebrew, Portuguese, Spanish, Italian</span>
            <h4>Medical Specialties</h4>
            <li>Internist</li>
            <h4 className="sub-h4">
              Years In Practice: <span> 41 (started in 1977)</span>
            </h4>
            <h4 className="sub-h4">
              Accepts New Patients: <span>Yes</span>
            </h4>
            <h4 className="sub-h4">Chitayat specializes in treating the following types of patients: </h4>
            <li>Adults</li>
            <h4 className="sub-h4">
              Medical Philosophy: <span>Traditional Medicine</span>
            </h4>
          </div>
          <div className="background-fill-next">
            <Icon name="dollar" /> Payment Options
            <Divider />
            <div>
              <Button> Payment Details</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
