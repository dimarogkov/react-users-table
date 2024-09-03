import { Input, Label } from '../../ui';

type Props = {
    isLoading: boolean;
    className?: string;
};

export const TableFilter: React.FC<Props> = ({ isLoading, className = '' }) => {
    return (
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full ${className}`}>
            <Label className='w-full'>
                <Input name='name' placeholder='Search by Name' disabled={isLoading} />
            </Label>
            <Label className='w-full'>
                <Input name='username' placeholder='Search by Username' disabled={isLoading} />
            </Label>
            <Label className='w-full'>
                <Input name='email' placeholder='Search by Email' disabled={isLoading} />
            </Label>
            <Label className='w-full'>
                <Input name='phone' placeholder='Search by Phone' disabled={isLoading} />
            </Label>
        </div>
    );
};
