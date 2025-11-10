import BasicButton from "@/components/BasicButton";
import { Meta, StoryObj } from "@storybook/react";
import { ArrowRightLeft } from "lucide-react";

type BasicButtonComponentProps = React.ComponentProps<typeof BasicButton>;

type StoryArgs = BasicButtonComponentProps & {
  customColor?: string;
  textColor?: string;
};

const meta: Meta<StoryArgs> = {
  title: "Custom/BasicButton",
  component: BasicButton,
  tags: ["autodocs"],
  globals: {
    backgrounds: { value: "black", grid: false },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    icon: {
      control: "boolean",
      description: "Toggle to show button with icon",
    },
    children: { control: "text" },
    onClick: { action: "clicked" },
    onHover: { action: "hovered" },
    customColor: {
      control: "color",
      description: "Custom background color for the button",
    },
    textColor: {
      control: "color",
      description: "Custom text color for the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BasicButton>;

const Template = (args: any) => {
  const { icon, customColor, textColor, ...rest } = args;

  return (
    <BasicButton
      {...rest}
      icon={icon ? ArrowRightLeft : undefined}
      style={{
        backgroundColor: customColor,
        color: textColor,
      }}
    />
  );
};

export const Primary: Story = {
  render: Template,
  args: {
    variant: "primary",
    size: "md",
    stretch: false,
    iconPosition: "leading",
    children: "Basic",
  },
};

export const Secondary: Story = {
  render: Template,
  args: {
    variant: "secondary",
    size: "md",
    stretch: false,
    iconPosition: "trailing",
    children: "Basic",
  },
};

export const Destructive: Story = {
  render: Template,
  args: {
    variant: "destructive",
    size: "md",
    stretch: false,
    iconPosition: "leading",
    children: "Basic",
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    variant: "disabled",
    size: "md",
    stretch: false,
    iconPosition: "leading",
    children: "Basic",
  },
};

export const IconLeading: Story = {
  render: Template,
  args: {
    variant: "primary",
    size: "md",
    stretch: false,
    icon: ArrowRightLeft,
    iconPosition: "leading",
    children: "Basic",
  },
};

export const IconTrailing: Story = {
  render: Template,
  args: {
    variant: "primary",
    size: "md",
    stretch: false,
    icon: ArrowRightLeft,
    iconPosition: "trailing",
    children: "Basic",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 place-items-center">
      <BasicButton size="sm">Basic</BasicButton>
      <BasicButton size="md">Basic</BasicButton>
      <BasicButton size="lg">Basic</BasicButton>
      <BasicButton size="xl">Basic</BasicButton>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <BasicButton variant="primary">Basic</BasicButton>
      <BasicButton variant="secondary">Basic</BasicButton>
      <BasicButton variant="destructive">Basic</BasicButton>
      <BasicButton variant="disabled">Basic</BasicButton>
    </div>
  ),
};

AllSizes.parameters = {
  controls: { disable: true },
};
AllVariants.parameters = {
  controls: { disable: true },
};
