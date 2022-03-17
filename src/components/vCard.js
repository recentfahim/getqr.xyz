import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Vcard ({ setQrText }) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobile, setMobile] = useState('');
    const [phone, setPhone] = useState('');
    const [fax, setFax] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [designation, setDesignation] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [website, setWebsite] = useState('');

    function handleSubmit (e) {
        e.preventDefault();
        var vcard_start = 'BEGIN:VCARD\nVERSION:3.0\n';
        var vcard_end = '\nEND:VCARD';
        var vcard_content = 'N:' + lastname + ';' + firstname + ';;;\nFN:' + firstname + ' ' + lastname +
            '\nTEL;TYPE=Mobile:' + mobile + '\nTEL;TYPE=Phone:' + phone + '\nTEL;TYPE=Fax:' + fax +
            '\nADR;TYPE=Home:;;' + street + ';' + city + ';' + zip + ';' + state + ';' + country +
            '\nTITLE:' + designation + '\nORG:' + company +'\nEMAIL;TYPE=INTERNET;TYPE=WORK;TYPE=PREF:'
            + email + '\nURL;TYPE=HOMEPAGE:' + website;


       setQrText(vcard_start + vcard_content + vcard_end);

        return false;
    }

    return (
        <Form onSubmit={handleSubmit} className="mb-5">
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Fax</Form.Label>
                <Form.Control type="text" value={fax} onChange={(e) => setFax(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Designation</Form.Label>
                <Form.Control type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Street</Form.Label>
                <Form.Control type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>ZIP</Form.Label>
                <Form.Control type="text" value={zip} onChange={(e) => setZip(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" value={state} onChange={(e) => setState(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Website</Form.Label>
                <Form.Control type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Generate
            </Button>
        </Form>
    )
}

export default Vcard