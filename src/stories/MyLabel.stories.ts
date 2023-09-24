import { Meta, StoryObj } from "@storybook/react"
import MyLabel from "../components/MyLabel"


const meta = {
    title: 'UI/label/MyLabel',
    component: MyLabel,
    tags:['autodocs'],
    parameters: {
        layout: 'centered'
    }, argTypes: {
        size: { control: 'inline-radio'},
        fontColor: {control: 'color'}
    }
} satisfies Meta<typeof MyLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args:{
        label: 'My label Label'
    }
}
export const AllCaps: Story = {
    args:{
        label: 'My All Label',
        AllCaps:true
    }
}
export const Secondary: Story = {
    args:{
        label: 'My secondary Label',
        color: 'text-secondary'
    }
}
export const CustomColor: Story = {
    args:{
        label: 'My custom color Label',
        fontColor: '#dfgfdf'

    }
}