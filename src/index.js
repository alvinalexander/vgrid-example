import ReactDOM from 'react-dom';
import React from 'react'
import {VGrid, Table, Database, IntervalSet, Interval, Bounds, BoundingBox, SpatialType_Bbox, interval_blocks_from_json} from '@wcrichto/vgrid';
import '@wcrichto/vgrid/dist/vgrid.css';
import vgrid_spec from './vgrid_spec.json';

let {interval_blocks, database, settings} = vgrid_spec;
  database = Database.from_json(database);
  interval_blocks = interval_blocks_from_json(interval_blocks);

  // Run code when user provides labeling input
  let label_callback = (label_state) => {
    console.log(label_state.blocks_selected);
  };
  // Render React component into a <div id="#vgrid"></div>
  ReactDOM.render(
    <VGrid interval_blocks={interval_blocks} database={database}
           settings={settings} label_callback={label_callback} />,
    document.getElementById('vgrid'));

