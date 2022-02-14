import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions/activityActions";
import Button from "./Button";
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const types = ["all", "education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];

const Filter = ({ setFilter }) => {
    const [filter, updateFilter] = useState({
        price: {
            min: 0,
            max: 1,
        },
        participants: 1,
        accessability: {
            min: 0,
            max: 1,
        },
        type: 'all',
        useFilter: false,
    });

    useEffect(() => {
        setFilter(filter);
    });

    const options = types.map((type, index) => <option key={index} value={type}>{type}</option>);

    const onChange = (e) => {
        updateFilter({
            ...filter,
            [e.target.name]: e.target.value
        })
    }

    const onChangePrice = (values) => {
        updateFilter({
            ...filter,
            price: {
                min: values[0],
                max: values[1]
            }
        })
    }

    const onChangeaccessability = (values) => {
        updateFilter({
            ...filter,
            accessability: {
                min: values[0],
                max: values[1]
            }
        })
    }

    const setUseFilter = (value) => {
        updateFilter({
            ...filter,
            useFilter: value
        });
    }

    if (filter.useFilter) {
        return (
          <div className="filter">
              <div className="filterField">
                  <label htmlFor="type">Type</label>
                  <select onChange={onChange} name="type" id="type" value={filter.type}>
                      {options}
                  </select>
              </div>
              <div className="filterField">
                  <label htmlFor="accessability">Accessability</label>
                  <div className="range"><span className="rangeVal min">{ filter.accessability.min }</span><Range onChange={onChangeaccessability} type="range" name="accessability" id="accessability" min={0.0} max={1.0} step={0.1} value={[filter.accessability.min, filter.accessability.max]} /><span className="rangeVal max">{ filter.accessability.max }</span></div>
              </div>
              <div className="filterField">
                  <label htmlFor="participants">Participants</label>
                  <input onChange={onChange} type="number" name="participants" id="participants" value={filter.participants} />
              </div>
              <div className="filterField">
                  <label htmlFor="price">Price</label>
                  <div className="range"><span className="rangeVal min">{ filter.price.min }</span><Range onChange={onChangePrice} type="range" name="price" id="price" min={0.0} max={1.0} step={0.1} value={[filter.price.min, filter.price.max]} /><span className="rangeVal max">{ filter.price.max }</span></div>
              </div>
              <div className="useFilter">
                  <Button title={'Remove filter'} onclick={() => setUseFilter(false)} />
              </div>
          </div>
        )
    }
    return (
        <div className="filter">
            <div className="useFilter">
                <Button title={'Use filter'} onclick={() => setUseFilter(true)} />
            </div>
        </div>
    )
}

const mapStateToProp = state => ({})

export default connect(mapStateToProp, { setFilter })(Filter)