import React from 'react';
import { useDispatch } from 'react-redux';

import { dialogueActive } from "./store/actions";
import { INpc } from "./data/Types";

type NPCStateProps = {
    state: string | null
  }
  
  const NPCState = (props: NPCStateProps) => {
    const imgStyle = {
      height: "100px",
      width: "100px",
      marginTop: "-100px",
      border: "0",
    }
  
    if(props.state){
      return <img style={imgStyle} src={props.state} />
    } else {
      return null
    }
  }
  
  type NPCProps = {
    n: INpc,
    state: any
  }
  
export const NPC = (props: NPCProps) => {
    const npcStyle = {
      backgroundImage: `url(${props.n.image})`,
      left: props.n.position.x,
      bottom: props.n.position.y,
      height: "300px",
      width: "230px",
      position: 'absolute' as 'absolute',
      textAlign: 'center' as 'center', 
    }
  
    const dispatch = useDispatch();
    function triggerEvent(event: any, source: any){
    
      const type = event.target.dataset.type;
      if(type==="npc" && source.trigger.dialogueId>=0){
        console.log(`Triggered NPC ${source.name} with ${source.trigger.dialogueId}`);
        dispatch(dialogueActive(source.trigger.dialogueId));
      }
    }
  
    const npcState = props.state[props.n.id];
    
    return (
      <div style={npcStyle} data-type='npc' onClick={(e) => triggerEvent(e, props.n)}>
        <NPCState state={npcState ? npcState : null}/>
      </div>
    )
  }
