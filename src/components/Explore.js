import React, { useEffect, useState } from "react";
import { actions } from "../AccountActions";
import {MDBCol} from "mdbreact";
function Explore() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        actions.getUsersSongs().then((usersPromise) => {
            
            usersPromise.forEach(userPromise => {
                
                userPromise.then(userObj => {
                    
                    setUsers( (pre)=> [...pre,userObj])
                })
            });
        });
    }, []);
    console.log(users);
    return (
        <>
            {
                users.map(user => (
                <>
                <p>{user.name}</p>
                <div>

                    {user.songs.map((song) => (
                        <MDBCol md="4">
                            <iframe
                                className="embed-responsive-item"
                                key={song}
                                src={`https://www.youtube.com/embed/${song}`}
                                frameBorder="0"
                                allowFullScreen
                                title={song}
                            ></iframe>
                        </MDBCol>
                    ))}
                </div>
                </>
                ))
            }
            <div></div>
        </>
    );
}
export default Explore;
