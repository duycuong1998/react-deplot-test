import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

function Show() {
    let slug = useParams();
    console.log(slug.slug);
    return (
        <div>
            {slug.slug}
        </div>
    );
}

export default Show;
