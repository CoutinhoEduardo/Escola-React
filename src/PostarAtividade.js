import React from 'react';
import Headers from './Headers';
import FormPostarAtividade from './FormPostarAtividade';
class PostarAtividade extends React.Component {
    render() {
        return (
            <div>
                <Headers />
                <div className='formAtividade'>
                    <FormPostarAtividade />
                </div>
            </div>
        )
    }

}
export default PostarAtividade