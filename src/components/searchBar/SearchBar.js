import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Button, Glyphicon, DropdownButton, MenuItem } from 'react-bootstrap';
import './SearchBarStyle.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', filter: 'All', isEmpty: false };
        this.handleChange = this.handleChange.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.filterOnSelect = this.filterOnSelect.bind(this);
    }

    searchHandler(e) {
        e.preventDefault();
        if (this.state.value === '') {
            this.setState({ isEmpty: true });
            return;
        }
        this.setState({ isEmpty: false });

        const term = {
            value: this.state.value.replace(/[^a-zA-Z0-9_ @?.,!&-]/g,''),
            filter: this.state.filter.toLowerCase(),
        };
        this.props.onSearch(term);
    }


    filterOnSelect(e) {
        const filters = ['All', 'movie', 'series', 'game'];
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
                            placeholder={this.state.isEmpty ? 'Required field!' : 'Search'}
                            onChange={ this.handleChange }
                            bsSize='large'
                            bsClass={`form-control ${this.state.isEmpty && 'error'}`}
                            autoFocus
                            autoComplete='off'
                        />
                        <InputGroup.Button>
                            <DropdownButton bsSize="large"
                                            title={`${this.state.filter.charAt(0).toUpperCase()}${this.state.filter.slice(1)}`}
                                            id='filter'
                                            onSelect={this.filterOnSelect}>
                                <MenuItem eventKey="0">All</MenuItem>
                                <MenuItem eventKey="1">Movie</MenuItem>
                                <MenuItem eventKey="2">Series</MenuItem>
                                <MenuItem eventKey="3">Game</MenuItem>
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
