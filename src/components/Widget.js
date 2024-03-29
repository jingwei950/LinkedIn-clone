import React from 'react'
import './Widget.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widget() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Corona virus: Singapore updates", "Top news - 886 readers")}
        {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
        {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
        {newsArticle("Is Redux too good?", "Code - 123 readers")}
    </div>
  );
}

export default Widget