import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePageAName } from './../../store/pages/pageA/action';

@connect (
  state => ({
    pageA: state.pageA
  }),
  { updatePageAName }
)
class PageA extends PureComponent {
  render () {
    const { pageA: { name }, updatePageAName } = this.props;

    return (
      <div className="page-a">
        <h1 className="greeting">hello {name}</h1>
        <label htmlFor="name"> show me your name:</label>
        <input
          id="name"
          type="text"
          onChange={e => {
            updatePageAName (e.target.value);
          }}
          value={name}
          onFocus={e => {
            e.target.select ();
          }}
        />
        <button
          onClick={() => {
            updatePageAName ();
          }}
        >
          change name
        </button>
        <Link to="/page_b">link to page b</Link>
        <style jsx>{`
            .page-a {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100vw;
                height: 100vh;
                font-size: 20px;
            }
            .greeting {
                margin-bottom: 20px;
            }  
            #name {
                margin-bottom: 20px;
            }  
            button {
                display: block;
                margin-bottom: 20px;
            }
        `}</style>
      </div>
    );
  }
}

export default PageA;