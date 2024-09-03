import { Input, Label } from '../../ui';

type Props = {
    className?: string;
};

export const TableFilter: React.FC<Props> = ({ className = '' }) => {
    return (
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full ${className}`}>
            <Label className='w-full'>
                <Input name='name' placeholder='Search by Name' />
            </Label>
            <Label className='w-full'>
                <Input name='username' placeholder='Search by Username' />
            </Label>
            <Label className='w-full'>
                <Input name='email' placeholder='Search by Email' />
            </Label>
            <Label className='w-full'>
                <Input name='phone' placeholder='Search by Phone' />
            </Label>
        </div>
    );
};
