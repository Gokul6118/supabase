import { createFileRoute } from '@tanstack/react-router'
import {ChartBar} from './../ChartBar'


export const Route = createFileRoute('/_Dashboard/dash')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    


    <ChartBar>

    </ChartBar>
    
    
    
    
    !</div>
}
