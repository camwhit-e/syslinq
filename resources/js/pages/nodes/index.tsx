import React from 'react';
import { type Node } from '@/types/syslinq/node';
import { BreadcrumbItem } from '@/types';
import NodesLayout from '@/layouts/nodes/layout';
import { Head, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { ArrowRightCircle, HardDrive, LoaderCircle, MemoryStick, Microchip, Server } from 'lucide-react';
import HeadingSmall from '@/components/heading-small';
import RowBox from '@/components/ui/row-box';

interface Props {
    data: Array<Node> | undefined;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/dashboard',
    },
    {
        title: 'Nodes',
        href: '/nodes',
    },
];

const NodesIndex: React.FC<Props> = ({ data }) => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="All Nodes" />
            <NodesLayout>
                {!data ? <LoaderCircle className={'w-8 h-8 animate-spin'} /> : (
                    <div>
                        {data.map((node) => (
                            <div key={node.id} onClick={() => router.visit(`/nodes/${node.id}`)} className={'cursor-pointer'}>
                                <RowBox>
                                    <div className={'grid grid-cols-12 text-gray-400'}>
                                        <Server className={'my-auto'} color={'green'} />
                                        <div className={'col-span-4'}>
                                            <p className={'font-semibold text-xl text-white'}>{node.name}</p>
                                            <p className={'text-gray-600 text-sm'}>/{node.id.slice(28, 36)}</p>
                                        </div>
                                        <div className={'col-span-2 my-auto'}>
                                            <div className={'inline-flex bg-black/50 p-2 rounded'}>
                                                <div className={'inline-flex'}>
                                                    <Microchip className={'w-4 h-4 my-auto'} />
                                                    <p className={'my-auto ml-2'}>0%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'col-span-2 my-auto'}>
                                            <div className={'inline-flex bg-black/50 p-2 rounded'}>
                                                <div className={'inline-flex'}>
                                                    <MemoryStick className={'w-4 h-4 my-auto'} />
                                                    <p className={'my-auto ml-2'}>0%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'col-span-2 my-auto'}>
                                            <div className={'inline-flex bg-black/50 p-2 rounded'}>
                                                <div className={'inline-flex'}>
                                                    <HardDrive className={'w-4 h-4 my-auto'} />
                                                    <p className={'my-auto ml-2'}>0%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <ArrowRightCircle className={'my-auto hover:text-white transition-colors duration-250'} />
                                    </div>
                                </RowBox>
                            </div>
                        ))}
                        {data.length < 1 && (
                            <HeadingSmall title={'Not Found'} description={'No nodes could be found on this interface.'} />
                        )}
                    </div>
                )}
            </NodesLayout>
        </AppLayout>
    );
};

export default NodesIndex;
