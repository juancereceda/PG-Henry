import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StyledDiv from '../users/userStyles';
import swal from 'sweetalert';
import NotFound from '../../404/NotFound'

function AdminFeedbacks() {
    const URL = 'http://localhost:3001/feedbacks';

    const [feedbacks, setFeedbacks] = useState([]);
    const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);

    const getFeedbacks = async () => {
        const response = await axios.get(URL);
        setFeedbacks(response.data);
        setFilteredFeedbacks(response.data);
    }

    useEffect(() => {
        getFeedbacks();
    }, [])

    const handleToggle = async (id, author, visibleBoolean) => {
        await axios.put(URL, { id })
        await swal(`Feedback from ${author} toggled to ${!visibleBoolean ? 'Visible' : 'Not Visible'}`, {
            icon: "success",
            buttons: false,
            timer: 1000,
        });
        await getFeedbacks();
    }

    const handleDelete = async (id, author) => {
        const deleteFeedback = await swal({
            title: `Are you sure to delete ${author} feedback?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        });
        if (deleteFeedback) {
            await axios.delete(URL, { data: { id } })

            await swal(`Feedback from ${author} has been deleted`, {
                icon: "success",
                buttons: false,
                timer: 1000,
            });
            await getFeedbacks();
        }
    }

    const handleFilterFeedbacks = e => {
        setFilteredFeedbacks(feedbacks.filter(f => (
            e.target.value === 'Visible' ? f.visible
                :
                e.target.value === 'Not Visible' ? !f.visible
                    :
                    e.target.type === 'text' ? f.author.toLowerCase().includes(e.target.value.toLowerCase())
                        :
                        feedbacks
        )))
    }
    return (
        <StyledDiv>
            <table className="container" >
                <thead className="title">
                    <div className='titleSearch'>
                        <h1>Feedbacks</h1>
                        <div className="search">
                            <form className="formContainer">
                                <div className="searchBarContainer">
                                    <input
                                        onChange={handleFilterFeedbacks}
                                        placeholder="Search by Author"
                                        type="text"
                                        className="input"
                                    ></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <tr className="header">
                        <td><h3>Author (username)</h3></td>
                        <td><h3>Feedback</h3></td>
                        <td>
                            <span><h3>Visibility</h3></span>
                            <select onChange={handleFilterFeedbacks}>
                                <option>All</option>
                                <option>Visible</option>
                                <option>Not Visible</option>
                            </select>
                        </td>
                    </tr>
                </thead>
                <tbody className="item">
                    {filteredFeedbacks?.length ?
                        filteredFeedbacks.map(feedback => (
                            <tr key={feedback._id} className='center'>
                                <td><h3>{feedback.author}</h3></td>
                                <td>{feedback.text}</td>
                                <td>
                                    <button
                                        className='userButton'
                                        title='Set Visible/Not Visible this feedback from Home Page'
                                        onClick={() => handleToggle(feedback._id, feedback.author, feedback.visible)}
                                    >
                                        {feedback.visible ? 'Toggle Not Visible' : 'Toggle Visible'}
                                    </button>
                                    <button
                                        className='userButtonDelete'
                                        title={`Deletes feedback from ${feedback.author}`}
                                        onClick={() => handleDelete(feedback._id, feedback.author)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                        :
                        <NotFound />
                    }
                </tbody>
            </table>
        </StyledDiv>
    )
}

export default AdminFeedbacks;