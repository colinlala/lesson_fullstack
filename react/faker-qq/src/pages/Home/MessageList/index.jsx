import React,{useState} from 'react'
import {  List, SwipeAction,PullToRefresh,DotLoading ,Image,Badge } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep';
// import { DragDropContext, Draggable, Droppable, } from 'react-beautiful-dnd';

// 没加拖拉前
function getNextData() {
  const ret = [];
  for (let i = 0; i < 18; i++) {
      ret.unshift(console.log('刷新好了'));
  }
  return ret;
}
// function Loading() {
//   return (
//     <DotLoading color='primary' />
//   )
// }

export default function MessageList({message}) {
  const [data, setData] = useState(() => getNextData());
  // const items = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const rightActions = [
    {
        key: 'pin',
        text: '置顶',
        color: 'primary',
    },
    {
        key: 'mute',
        text: '标为已读',
        color: 'warning',
    },
    {
        key: 'delete',
        text: '删除',
        color: 'danger',
    },
  ];
  return (
    <PullToRefresh onRefresh={async () => {
      await sleep(1000);
      // await Loading();
      setData([...getNextData(), ...data]);
    }}>
      <List style={{ '--border-top': 'none','--border-inner': 'none','--border-bottom': 'none'}}>
        {
          message.map(item => (
            <SwipeAction key={item.id} rightActions={rightActions}>
              <List.Item key={item.id} 
                          clickable
                          arrow={false}
                          // 列表项左侧
                          prefix={
                            <Image src={item.img} 
                                  style={{ borderRadius: 20 }} 
                                  fit='cover' width={40} height={40}
                            />
                          } 
                          // 右侧
                          extra={
                            <div className='right' style={{display:'flex',flexDirection: 'column',alignItems: 'center'}}>
                              <span style={{marginBottom:'0.5rem'}}>{item.time}</span>
                              {/* <div className='nums_box' style={{backgroundColor:'#eeeeee',lineHeight:'1rem',width:'1.8rem',height:'1rem'}}><span>{item.nums}</span></div> */}
                              {/* <div className='nums_box' style={{backgroundColor:'#eeeeee',lineHeight:'1rem',width:'1.9rem',height:'1rem',borderRadius:'1rem'}}><span style={{textAlign:'center'}}>{item.nums}</span></div> */}
                              <div><Badge content={item.nums} /></div>
                              {/* <span style={{backgroundColor:'#eeeeee',lineHeight:'1rem',width:'1.9rem',height:'1rem',borderRadius:'1rem'}}>{item.nums}</span> */}
                            </div>
                            
                          }
                        description={item.description}
                >
                {item.name}
              </List.Item>
            </SwipeAction>
            )
          )
        }
      </List>
    </PullToRefresh>
  )
}


// const reorder = (list, startIndex, endIndex) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);
//     return result;
// };

// function getNextData() {
//   const ret = [];
//   for (let i = 0; i < 18; i++) {
//       ret.unshift(console.log(11111));
//   }
//   return ret;
// }
// // function Loading() {
// //   return (
// //     <DotLoading color='primary' />
// //   )
// // }

// export default function MessageList() {
//   const [data, setData] = useState(() => getNextData());
//   const items = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//   const rightActions = [
//     {
//         key: 'pin',
//         text: '置顶',
//         color: 'primary',
//     },
//     {
//         key: 'mute',
//         text: '标为已读',
//         color: 'warning',
//     },
//     {
//         key: 'delete',
//         text: '删除',
//         color: 'danger',
//     },
//   ];
//   const [list, setList] = useState(users);
//     const onDragEnd = (result) => {
//         if (!result.destination)
//             return;
//         const newList = reorder(list, result.source.index, result.destination.index);
//         setList([...newList]);
//     };
//   return (
//     <PullToRefresh onRefresh={async () => {
//       await sleep(1000);
//       // await Loading();
//       setData([...getNextData(), ...data]);
//     }}>
//       <List>
//         <DragDropContext onDragEnd={onDragEnd}>
//           <Droppable droppableId='droppable'>
//             {droppableProvided => (<div ref={droppableProvided.innerRef}>
//                 {items.map((item, index) => (<Draggable key={item.id} draggableId={item.id} index={index}>
//                   <SwipeAction key={item} rightActions={rightActions}>
//                     {(provided, snapshot) => (<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={Object.assign(Object.assign({}, provided.draggableProps.style), { opacity: snapshot.isDragging ? 0.8 : 1 })}>
//                         <List.Item key={item}
//                                   clickable
//                                   arrow={false}
//                                   style={{ '--border-bottom': 'none','--border-top': 'none','--border-inner': 'none','--active-background-color':'#eeeeee'}}
//                         >
//                           {item}
//                         </List.Item>
//                       </div>)}
//                   </SwipeAction></Draggable>))}
//                 {droppableProvided.placeholder}
//               </div>)}
//           </Droppable>
//         </DragDropContext>
//         {/* {
//           items.map(item => (
//             <SwipeAction key={item} rightActions={rightActions}>
//               <List.Item key={item} 
//                           clickable
//                           arrow={false}
//                           style={{ '--border-bottom': 'none','--border-top': 'none','--border-inner': 'none','--active-background-color':'#eeeeee'}}
//                         // prefix={
//                         //   <Image src={user.avatar} 
//                         //         style={{ borderRadius: 20 }} 
//                         //         fit='cover' width={40} height={40}
//                         //   />
//                         // } 
//                         // description={user.description}
//                 >
//                 {item}
//               </List.Item>
//             </SwipeAction>
//             )
//           )
//         } */}
//       </List>
//     </PullToRefresh>
//   )
// }