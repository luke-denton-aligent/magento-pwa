<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magento\Framework\GraphQl\Type\Enum;

/**
 * Produces mapped name to values for the Enum types to be map them against the data that comes from a database.
 */
interface DataMapperInterface
{
    /**
     * Return GraphQL enum types with name-values pairs that map to the definition of the graphql schema
     *
     * @param string $enumName
     * @return string[]
     */
    public function getMappedEnums(string $enumName);
}
