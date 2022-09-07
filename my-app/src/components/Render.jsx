import React from 'react';
import data from './../news.json';

class Render extends React.Component{

    render() {

        return(
            <div>
                {data.map((item) => (
                    <div id={item.id} className="news m-5 ">

                        {item.isSpecial ? <div className="danger">особая новость</div> : null}

                        <h5>{item.title}</h5>

                        <div dangerouslySetInnerHTML={{__html: item.content}} />

                        <p>
                            <i>{item.dateCreated}</i>
                        </p>

                        <h4>Category</h4>

                        {item.categories ?
                            <ul>
                                {item.categories.map((cat) => (
                                    <li id={cat.id}>{cat.name}</li>
                                ))}
                            </ul>

                            : null
                        }


                        {item.link ?
                            <button className=" btn btn-primary">
                                <a href={item.link}>link</a>
                            </button>
                            : null
                        }



                        {item.photo ?
                            <div>
                                <img src={item.photo}/>
                            </div>
                            : null
                        }

                        <p>
                            <b>{item.author}</b>
                        </p>

                    </div>
                ))}
            </div>

        )
    }
}

export default Render;
