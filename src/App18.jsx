import {
    Button,
    Container,
    Modal,
    Nav,
    Navbar,
    Pagination,
    Spinner,
} from "react-bootstrap";
import { FcRight,FcLeft } from "react-icons/fc";
import {shelljs} from "globals";
import {useState} from "react";
function App18 (){
    const [show, setShow] = useState(false);
    return(
        <div>
            <Button onClick={()=>setShow(!show)}>
               모달 예제
            </Button>
            <Modal show={show} onClose={() => setShow(!show)}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>
                        Lorem ipsum dolor.
                    </Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                        doloremque ducimus laborum magnam qui quos ratione saepe voluptatibus
                        voluptatum! Aliquam aspernatur beatae consectetur harum in magni
                        maxime mollitia odio optio?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow(!show)}>
                            Close
                        </Button>
                        <Button onClick={() => setShow(!show)}>Save</Button>
                    </Modal.Footer>
            </Modal>
            <Pagination >
                <Pagination.Prev>
                    <FcLeft />
                </Pagination.Prev>
                <Pagination.Item>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item active={true}>3</Pagination.Item>
                <Pagination.Item>4</Pagination.Item>
                <Pagination.Item>5</Pagination.Item>
                <Pagination.Next>
                    <FcRight />
                </Pagination.Next>
            </Pagination>
            <Spinner/>
            <Spinner animation={"border"}/>
            <Spinner animation={"grow"}/>
            <Spinner animation={"grow"} variant={"primary"}/>
            <Spinner animation={"grow"} variant={"secondary"}/>

        </div>
    )

}

export default App18;