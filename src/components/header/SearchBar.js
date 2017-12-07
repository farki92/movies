import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Button, Glyphicon, DropdownButton, MenuItem } from 'react-bootstrap';
import './SearchBarStyle.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', filter: 'All' };
        this.handleChange = this.handleChange.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.filterOnSelect = this.filterOnSelect.bind(this);
    }

    searchHandler(e) {
        e.preventDefault();
        const term = {
            value: this.state.value.replace(/[^a-zA-Z0-9_ @?.,!&-]/g,''),
            filter: this.state.filter.toLowerCase(),
        };
        this.props.onSearch(term);
    }


    filterOnSelect(e) {
        const filters = ['All', 'Movies', 'Series', 'Episodes'];
        this.setState({ filter: filters[e] });
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return(
            <form className='form' onSubmit={this.searchHandler}>
                <FormGroup controlId="search">
                    <InputGroup>
                        <FormControl
                            type="text"
                            value={ this.state.value }
                            placeholder="Search"
                            onChange={ this.handleChange }
                            bsSize="large"
                            autoFocus
                        />
                        <InputGroup.Button>
                            <DropdownButton bsSize="large"
                                            title={this.state.filter}
                                            id='filter'
                                            onSelect={this.filterOnSelect}>
                                <MenuItem eventKey="0">All</MenuItem>
                                <MenuItem eventKey="1">Movies</MenuItem>
                                <MenuItem eventKey="2">Series</MenuItem>
                                <MenuItem eventKey="3">Episode</MenuItem>
                            </DropdownButton>
                            <Button
                                bsSize="large"
                                bsStyle='primary'
                                onClick={!this.props.isFetching ? this.searchHandler : null}
                            >
                                <Glyphicon glyph="glyphicon glyphicon-search" />
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </form>
        );
    }
}

export default SearchBar;
