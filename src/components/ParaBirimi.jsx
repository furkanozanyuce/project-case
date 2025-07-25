import React from 'react';
import { useState } from 'react';
import { Card, Button, Dropdown, Typography, Space, Popover } from 'antd';
import { DownOutlined, PlusOutlined, MinusOutlined, SwapOutlined, InboxOutlined, DeleteOutlined } from '@ant-design/icons';
import ParaCikisForm from './ParaCikisForm';

const { Title, Text } = Typography;

const ParaBirimi = ({ 
  title, 
  currency, 
  description,
  balance
}) => {
  const [showParaCikisiForm, setShowParaCikisiForm] = useState(false);

  const dropdownItems = [
    {
      key: 'transfer',
      label: 'Diğer Kasaya Transfer Yap',
      icon: <SwapOutlined />,
    },
    {
      key: 'archive',
      label: 'Arşivle',
      icon: <InboxOutlined />,
    },
    {
      key: 'delete',
      label: 'Sil',
      icon: <DeleteOutlined />,
      danger: true,
    },
  ];

  const handleParaCikisiSubmit = () => {
    setShowParaCikisiForm(false);
  };

  const handleParaCikisiCancel = () => {
    setShowParaCikisiForm(false);
  };

  return (
    <Card className="inline-block border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow px-4 py-4">
  <div className="space-y-4">
    <div className="flex justify-between items-start gap-4">
        <div className="min-w-[140px]">
            <div className="flex items-center gap-1.5 space-x-2">
                <Title level={4} className="m-0 text-gray-900 whitespace-nowrap">{title}</Title>
                <Text className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded whitespace-nowrap">{currency}</Text>
            </div>
            <Text className="text-sm text-gray-500 whitespace-nowrap">{description}</Text>
        </div>

        <div className="flex-shrink-0">
            <Title level={2} className="m-0 text-gray-900 font-semibold whitespace-nowrap">{balance}</Title>
        </div>
    </div>
</div>

        <div className="flex items-center mt-5 pt-5 border-t border-gray-200">
          <Button 
            icon={<PlusOutlined />} 
            className="flex-1 border-gray-300 text-gray-700 hover:border-gray-400"
          >
            Para Girişi
          </Button>
          
          <div className="flex flex-1/9">
            <Popover
              content={
                <ParaCikisForm
                  onSubmit={handleParaCikisiSubmit}
                  onCancel={handleParaCikisiCancel}
                />
              }
              trigger="click"
              open={showParaCikisiForm}
              onOpenChange={setShowParaCikisiForm}
              placement="bottomLeft"
            >
              <Button 
                icon={<MinusOutlined />}
                className="flex-1 border-gray-300 text-gray-700 hover:border-gray-400 rounded-r-none border-r-0"
              >
                Para Çıkışı
              </Button>
            </Popover>
            <Dropdown
              menu={{ items: dropdownItems }}
              trigger={['click']}
              placement="bottomRight"
            >
              <Button 
                icon={<DownOutlined />}
                className="border-gray-300 text-gray-700 hover:border-gray-400 rounded-l-none px-2"
              />
            </Dropdown>
          </div>
        </div>
    </Card>
  );
};

export default ParaBirimi;